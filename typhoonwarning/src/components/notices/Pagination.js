/**
 * 생성일자 : 2022. 01. 10.
 * 페이지네이션 구성을 위한 컴포넌트
 */

 import React from 'react';
 import styled from 'styled-components';
 import qs from 'qs';
 import Button from '../common/Button';
 
 const PaginationBlock = styled.div`
   width: 320px;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   margin-bottom: 3rem;
 `;
 const PageNumber = styled.div``;
 
 const buildLink = ({ page }) => {
   const query = qs.stringify({ page });
   return `/notice/?${query}`;
 };
 
 const Pagination = ({ page, lastPage, username}) => {
   return (
     <PaginationBlock>
       <Button
         disabled={page === 1}
         to={
           page === 1 ? undefined : buildLink({ username, page: page - 1 })
         }
       >
         이전
       </Button>
       <PageNumber>{page}</PageNumber>
       <Button
         disabled={page === lastPage}
         to={
           page === lastPage
             ? undefined
             : buildLink({ username, page: page + 1 })
         }
       >
         다음
       </Button>
     </PaginationBlock>
   );
 };
 
 export default Pagination;