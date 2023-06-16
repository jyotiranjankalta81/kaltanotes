import * as React from "react";
import Header from "../Header/Header";
import BlogCard from "./BlogCard/BlogCard";
import "./BlogPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../../Redux/features/commonSlice";
import Spinner from "../Spinner/Spinner.jsx";
import ReactPaginate from "react-paginate";

export default function BlogPage() {
  const dispatch = useDispatch();
  const { blog, loading } = useSelector((state) => ({ ...state.commons }));
  const [pageNumber, setPageNumber] = React.useState(0);

  const blogsPerPage = 6;
  const pagesVisited = pageNumber * blogsPerPage;

  const pageCount = Math.ceil(blog?.length / blogsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  console.log(blog);

  React.useEffect(() => {
    dispatch(getBlog());
  }, []);

  if (loading == true) {
    return <Spinner />;
  }

  // const displayBlogs = BlogsData.slice(pagesVisited, pagesVisited + blogsPerPage)

  return (
    <div className="blog-page">
      <Header />
      <div className="blogs-wrapper">
        <h2 className="title--primary">Blogs</h2>
        <div className="blogs-grid">
          {blog
            .slice(pagesVisited, pagesVisited + blogsPerPage)
            .map((item, index) => (
              <BlogCard key={index} {...item} />
            ))}
        </div>
      </div>
      <div className="Blogs-Carousel-Track">
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
}
