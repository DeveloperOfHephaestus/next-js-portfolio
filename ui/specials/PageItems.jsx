import { useEffect, useState } from "react";
import { Card, CardBody, Col, Row, Table } from "reactstrap";

import NavigatorTab from "./NavigatorTab";
import { usePagination, useScreenWidth } from "../../hooks/utilityHooks";
import { useDispatch, useSelector } from "react-redux";
import { dashboardSettings } from "../../redux/action";
import SearchBar from "./SearchBar";
import PaginationControls from "./PaginationControls";

const PageItems = ({
  items,
  onDeleteClick,
  CardComponent,
  TableRowComponent,
  tableHeadItems,
  adaptLayout,
  searchItemsByCondition,
  searchbarPlaceholder,
  itemsPerPage,
}) => {
  const { recommendedview } = useScreenWidth(768);
  const { displayType } = useSelector((s) => s?.dashboardSettings ?? {});
  const dispatch = useDispatch();
  const [itemsDisplayType, setItemsDisplayType] = useState(recommendedview);
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchedResults, setSearchedResults] = useState([]);

  useEffect(() => {
    if (adaptLayout) {
      setItemsDisplayType(recommendedview);
    }
  }, [recommendedview]);

  useEffect(() => {
    if (searchValue !== "") setIsSearching(true);
    else setIsSearching(false);
    if (searchItemsByCondition && isSearching) {
      let itemsToSearchFrom = [...items];
      let results = itemsToSearchFrom?.filter((item) =>
        searchItemsByCondition(searchValue?.toUpperCase(), item)
      );
      setSearchedResults(results);
    }
  }, [searchValue]);

  const {
    PageNumbers,
    currentItemsShown,
    currentPageIndex,
    getNextIndex,
    getPreviousIndex,
    setCurrentItemsShown,
    setCurrentPageIndex,
    pageCount,
  } = usePagination(items, itemsPerPage);

  return (
    <div>
      <Row className="mx-0 gx-0 gy-4">
        <Col md={6}>
          <SearchBar
            value={searchValue}
            setValue={setSearchValue}
            placeholder={searchbarPlaceholder}
          />
        </Col>
        <Col md={6} className=" d-flex justify-content-end">
          <NavigatorTab
            items={[
              { title: "Table View", flowAt: "table" },
              { title: "Cards View", flowAt: "cards" },
            ]}
            className={"justify-content-end "}
            flowAt={itemsDisplayType}
            onItemClick={(item) => setItemsDisplayType(item?.flowAt)}
          />
        </Col>
        {!isSearching ? (
          <Col md={12}>
            {itemsDisplayType === "table" ? (
              <Card className="standard-card border-none">
                <CardBody>
                  <Table>
                    <thead>
                      <tr>
                        {tableHeadItems &&
                          tableHeadItems?.map((item, key) => (
                            <th key={key}>{item}</th>
                          ))}
                      </tr>
                    </thead>
                    <tbody>
                      {TableRowComponent &&
                        currentItemsShown?.map((item, key) => (
                          <TableRowComponent
                            key={key}
                            details={item}
                            onDeleteClick={onDeleteClick}
                          />
                        ))}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            ) : (
              <Row className="g-2">
                {CardComponent &&
                  currentItemsShown?.map((item, key) => (
                    <Col md={4} lg={6} xl={3} key={key}>
                      <CardComponent
                        details={item}
                        onDeleteClick={onDeleteClick}
                      />
                    </Col>
                  ))}
              </Row>
            )}
          </Col>
        ) : (
          <Col md={12}>
            {itemsDisplayType === "table" ? (
              <Card className="standard-card border-none">
                <CardBody>
                  <Table>
                    <thead>
                      <tr>
                        {tableHeadItems &&
                          tableHeadItems?.map((item, key) => (
                            <th key={key}>{item}</th>
                          ))}
                      </tr>
                    </thead>
                    <tbody>
                      {TableRowComponent &&
                        searchedResults?.map((item, key) => (
                          <TableRowComponent
                            key={key}
                            details={item}
                            onDeleteClick={onDeleteClick}
                          />
                        ))}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            ) : (
              <Row className="g-2">
                {CardComponent &&
                  searchedResults?.map((item, key) => (
                    <Col md={4} lg={6} xl={3} key={key}>
                      <CardComponent
                        details={item}
                        onDeleteClick={onDeleteClick}
                      />
                    </Col>
                  ))}
              </Row>
            )}
          </Col>
        )}
        {!isSearching && (
          <PaginationControls
            PageNumbers={PageNumbers}
            currentPageIndex={currentPageIndex}
            getNextIndex={getNextIndex}
            getPreviousIndex={getPreviousIndex}
            pageCount={pageCount}
            setCurrentPageIndex={setCurrentPageIndex}
          />
        )}
      </Row>
    </div>
  );
};

export default PageItems;
