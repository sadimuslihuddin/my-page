import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState({});

  const columns = useMemo(
    () => [
      {
        name: "No.",
        cell: (row) => row.id,
      },
      {
        name: "Type",
        cell: (row) => row.category,
      },
      {
        name: "Title",
        cell: (row) => row.title,
      },
    ],
    []
  );

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setData(res?.data?.products);
    });
  }, []);

  return (
    <Container className="mb-5">
      <Row>
        <Col>
          <DataTableExtensions
            className="paid"
            columns={columns}
            data={data?.length ? data : []}
            filterPlaceholder="Filter Halaman"
            exportHeaders
          >
            <DataTable
              noHeader
              paginationServer
              sortServer
              data={data?.length ? data : []}
              columns={columns}
            />
          </DataTableExtensions>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
