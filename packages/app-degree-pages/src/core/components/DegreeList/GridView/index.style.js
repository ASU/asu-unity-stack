// @ts-check

import styled, { css } from "styled-components";

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

const tableLoader = css`
  @keyframes loading {
    40% {
      background-position: 100% 0;
    }
    100% {
      background-position: 100% 0;
    }
  }

  &[data-loading="true"] {
    td {
      position: relative;

      .bar {
        background-color: #e7e7e7;
        height: 14px;
        border-radius: 7px;
        width: 80%;
      }

      &:after {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: 0;
        content: "";
        display: block;
        width: 100%;
        height: 24px;
        background-image: linear-gradient(
          100deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0.5) 60%,
          rgba(255, 255, 255, 0) 80%
        );
        background-size: 200px 24px;
        background-position: -100px 0;
        background-repeat: no-repeat;
        animation: loading 1s infinite;
      }
    }
  }
`;

const Table = styled.table`
  ${tableLoader}
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
    padding: 8px 20px;
    // display: inline-block;
  }

  tr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;

    td {
      vertical-align: top;
    }

    .major {
      width: 250px;
      a {
        font-weight: 700;
      }
    }

    .degree {
      width: 75px;
    }

    .required-course {
      width: 100px;
    }

    .campus-location {
      width: 90px;
    }

    .accelerated-concurrent {
      width: 115px;
    }

    .college {
      width: 210px;
    }

    .compare-fav {
      // width: 180px;
    }

    .apply-info {
      width: 168px;
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

      &:not(.row-info):hover {
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
        // align-items: center;
        justify-content: space-between;
        gap: 0.5rem;
      }
    }

    tr.row-info {
      td > div {
        position: relative;
      }
      input.togle-more-text {
        opacity: 0;
        position: absolute;
        pointer-events: none;
      }

      input:checked + .desc-long {
        max-height: fit-content;
        overflow: auto;
      }

      .desc-long {
        max-height: 200px;
        overflow: hidden;
      }

      label {
        position: absolute;
        right: 0px;
        transform: translateY(-195%);
        border: 0;
        background: white;
        box-shadow: 5px 5px 8px 16px #f3f3f3;
      }
    }

    tr.row-info {
      td:first-child {
        flex-basis: 55%;
      }

      td:last-child {
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

  tfoot {
    ul {
      margin-bottom: 0 !important;
    }
  }
`;

export { Table, BoxPreview };
