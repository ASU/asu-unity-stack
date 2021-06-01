// @ts-check

import styled from "styled-components";

const BoxPreview = styled.div`
  .box-preview {
    // display: none;
    width: 100%;
  }

  a:hover + .box-preview,
  .box-preview:hover {
    display: block;
    position: relative;
    z-index: 100;
  }
`;

const Table = styled.table`
  --table-border-color: #e5e5e5;

  background-color: #fafafa;
  border: 1px solid var(--table-border-color);
  border-collapse: collapse;
  padding: 5px;

  width: 100%;
  margin: 0 auto;
  clear: both;
  border-spacing: 0;

  a {
    text-decoration: none;
  }

  thead {
    background: #d0d0d0;
    th {
      outline: none;
      :focus {
        box-shadow: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #191919 !important;
      }
    }
  }

  th,
  td {
    padding: 8px;
  }

  tr {
    .major {
      width: 80px;
      a {
        font-weight: 700;
      }
    }

    .degree {
      width: 80px;
    }

    .required-course {
      width: 160px;
    }

    .campus-location {
      width: 90px;
    }

    .college {
      width: 180px;
    }

    .accelerated-concurrent {
      width: 120px;
    }

    .compare-fav {
      width: 110px;
    }

    .apply-info {
      & .btn {
        width: fit-content;
        :first-child {
          margin-bottom: 0.5rem;
        }
      }
    }
  }

  tbody {
    tr {
      border: 1px solid var(--table-border-color);
      border-top: 0;

      &:hover {
        background-color: #e7e7e8;
        background-color: #d2d2d2;
      }

      .info-apply .cell-container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.5rem;
      }

      td .cell-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
      }
    }

    tr:not([data-is-open="true"]) + tr.row-info {
      visibility: hidden;
      opacity: 0;
      transition: visibility 0.5s, opacity 0.5s, line-height 0.3s linear;
      line-height: 0;
      border: 0;

      & * {
        margin: 0;
        padding: 0;
      }
    }

    tr[data-is-open="true"] + tr.row-info {
      visibility: visible;
      height: auto;
      opacity: 1;
      line-height: 1.5;
    }
  }
`;

export { Table, BoxPreview };
