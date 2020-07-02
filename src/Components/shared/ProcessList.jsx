import React from "react";
import { Flex, Divider } from "@chakra-ui/core";
import styled from "styled-components";

function ProcessList(props) {
  const { list = [], isMobileView = false } = props;
  const desktopViews = 6;
  const mobileViews = 2;
  const perRow = isMobileView ? mobileViews : desktopViews;
  const total = list.length;
  const totalRows = Math.ceil(total / perRow);
  const rows = new Array(totalRows).fill(1).map((value, idx) => {
    return new Array(perRow)
      .fill(1)
      .map((a, childIdx) => {
        return idx * perRow + childIdx;
      })
      .filter((index) => index < total);
  });
  console.log({ rows });
  return (
    <PageContainer my={16}>
      {rows.map((row, idx) => (
        <React.Fragment>
          <Flex
            className="ui__process_row"
            w="100%"
            borderTop={idx > 0 ? "1px" : 0}
            justifyContent={totalRows <= 1 ? "center" : "flex-start"}
          >
            {row.map((listIdx) => (
              <Flex
                className="ui__process_list"
                key={listIdx}
                w={100 / perRow + "%"}
                alignItems="center"
                justifyContent="center"
                p={{ base: 8 }}
              >
                {list[listIdx]}
              </Flex>
            ))}
          </Flex>
        </React.Fragment>
      ))}
    </PageContainer>
  );
}

const PageContainer = styled(Flex)`
  flex-wrap: wrap;

  .ui__process_list {
    border-right: 1px solid;
  }

  .ui__process_list:last-child {
    border-right: 0;
  }

  .ui__process_row:last-child:not(:first-child) {
    .ui__process_list:last-child:not(:nth-child(6)) {
      border-right: 1px solid;
    }
  }

  @media screen and (max-width: 640px) {
    .ui__process_row:last-child {
      .ui__process_list:last-child:not(:nth-child(even)) {
        border-right: 1px solid;
      }
    }
  }
`;

export default ProcessList;
