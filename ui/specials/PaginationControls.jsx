import ReactPaginate from "react-paginate";
import specialStyles from "./SpecialStyles.module.css";

const PaginationControls = ({
  PageNumbers,
  setCurrentPageIndex,
  getPreviousIndex,
  getNextIndex,
  currentPageIndex,
  pageCount,
}) => {
  return (
    <div className="d-flex justify-content-center mt-3">
      {pageCount > 1 ? (
        <ReactPaginate
          activeClassName={specialStyles?.paginate_item_active}
          breakLabel="..."
          nextLabel="next >"
          onPageChange={(e) => {
            setCurrentPageIndex(e.selected + 1);
          }}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          activeLinkClassName={specialStyles?.paginate_item_active}
          pageClassName={specialStyles?.paginate_item}
          renderOnZeroPageCount={null}
          className={specialStyles?.pagination}
          nextClassName={specialStyles?.paginate_next}
          nextLinkClassName={specialStyles?.paginate_next_prev_btns}
          previousClassName={specialStyles?.paginate_next_prev_btns}
          previousLinkClassName={specialStyles?.paginate_next_prev_btns}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default PaginationControls;
