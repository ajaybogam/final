import React from 'react';
import { Flex } from '@chakra-ui/core';
import styled from 'styled-components';

function ProcessList(props) {
    const { list = [] } = props
    return <PageContainer my={16}>
        {list.map((item, idx) => <Flex
            className="ui__process_list"
            key={idx}
            alignItems="center"
            justifyContent="center"
            p={{ base: 8 }}>
            {item}
        </Flex>)}
    </PageContainer>
}

const PageContainer = styled(Flex)`
  flex-wrap: wrap;

  .ui__process_list {
    width: calc(100% / 6);
    flex-shrink: 0;
    margin-bottom: -1px;
    border-right: 1px solid;
  }

  .ui__process_list:nth-child(6n) {
      border-right: 0;
  }

  .ui__process_list:nth-child(6):not(:last-child),
  .ui__process_list:nth-child(n + 7):not(:nth-child(n + 13))   {
    background: red;
    border-right: 0;
    border-bottom: 1px solid;
}

  .ui__process_list:nth-child(n + 7) {
      border-top: 1px solid;
  }

  @media (max-width: 768px) {
   .ui__process_list {
      width: calc(100% / 4);
    }
  }

  @media (max-width: 488px) {
    .ui__process_list {
       width: calc(100% / 2);
     }
   }
`

export default ProcessList;