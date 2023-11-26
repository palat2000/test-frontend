import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Table from "./components/Table";
import { useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [data, setData] = useState([]);
  const fetchData = async (page) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:8080/get-data${page ? "?page=" + page : ""}`
      );
      setData(data.data);
      setTotalPages(data.pages);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const changePage = async (page) => {
    try {
      setCurrentPage(page);
      await fetchData(page);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="layout">
      {loading && (
        <div className="loading-background">
          <div className="loading">Loading</div>
        </div>
      )}
      <div className="left-side">
        <Sidebar />
      </div>
      <div className="right-side">
        <Header />
        <div className="content">
          <Table data={data} />
          <div className="pagination">
            {Array(totalPages)
              .fill(null)
              .map((el, index) => (
                <span
                  onClick={() => changePage(index + 1)}
                  className={`${
                    currentPage == index + 1 ? "active" : "page-button"
                  }`}
                  key={index}
                >
                  {index + 1}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
