import { useEffect, useState } from "react";
import { useScreenWidth } from "../../hooks/utilityHooks";
import { Card, Col, Row, Table } from "reactstrap";

const FilterBasedSearch = ({
  CardComponent,
  TableRowComponent,
  items,
  conditionApplied,
  tableHeadItems,
  onDeleteClick,
}) => {
  const { recommendedview } = useScreenWidth(768);
  const [currentItemsShown, setCurrentItemsShown] = useState([]);

  useEffect(() => {
    let array = [...items]?.filter((item) => conditionApplied?.condition(item));
    setCurrentItemsShown(array);
  }, [conditionApplied]);

  return (
    <div
      style={{ background: recommendedview === "cards" ? "#eeee" : "" }}
      className="p-2"
    >
      {currentItemsShown?.length === 0 ? (
        <div className="d-flex align-items-center gap-2">
          <small className="f-6">Try searching again</small>
        </div>
      ) : (
        <>
          {recommendedview === "table" ? (
            <Table>
              <thead>
                <tr>
                  {tableHeadItems?.map((item, key) => (
                    <th key={key}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentItemsShown?.map((item, key) => (
                  <TableRowComponent
                    key={key}
                    details={item}
                    onDeleteClick={onDeleteClick}
                  />
                ))}
              </tbody>
            </Table>
          ) : (
            <Row className="g-3">
              {currentItemsShown?.map((item, key) => (
                <Col md={6} xl={4} key={key}>
                  <CardComponent details={item} onDeleteClick={onDeleteClick} />
                </Col>
              ))}
            </Row>
          )}
        </>
      )}
    </div>
  );
};

export default FilterBasedSearch;
