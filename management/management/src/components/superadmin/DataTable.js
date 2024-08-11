import React,{useMemo} from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import UnfilledButton from '../../common/UnfilledButton';
import "./DataTable.css"

const DataTable = () => {
    const data = React.useMemo(
        () => [
          {
            orgId: '1245411',
            orgName: 'Hackensack University Medical Center',
            address: '100 East 77th Street, New York, NY 10075',
          },
          {
            orgId: '134544',
            orgName: 'Montefiore Medical Center',
            address: '550 First Avenue, New York, NY 10016',
          },
          {
            orgId: '134540',
            orgName: 'Presbyterian Hospital',
            address: '462 First Avenue, New York, NY 10016',
          },
          {
            orgId: '134542',
            orgName: 'Memorial Sloan Kettering Center',
            address: '1275 York Avenue, New York, NY 10065',
          },
          {
            orgId: '1245411',
            orgName: 'Jersey Shore University Medical Center',
            address: '4422 Third Avenue, Bronx, NY 10457',
          },
          {
            orgId: '144543',
            orgName: 'Shore University Medical Center',
            address: '30 Prospect Avenue, Hackensack, NJ 07601',
          },
          {
            orgId: '144566',
            orgName: 'John Smith Hospital',
            address: '111 East 210th Street, Bronx, NY 10467',
          },
          {
            orgId: '1245411',
            orgName: 'Johnson University Hospital',
            address: 'Osborne Terrace, Newark, NJ 07112',
          },
          {
            orgId: '144541',
            orgName: 'Prest Hospital',
            address: '1945 NJ-33, Neptune City, NJ 07753',
          },
        ],
        []
      );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Org ID',
        accessor: 'orgId',
        sortType: 'alphanumeric',
      },
      {
        Header: 'Org Name',
        accessor: 'orgName',
      },
      {
        Header: 'Address',
        accessor: 'address',
        disableSortBy: true,
      },
      {
        Header: 'Action',
        accessor: 'action',
        disableSortBy: true,
        Cell: () => (
            <div style={{"display":"flex",gap:"15px",alignItems:"center"}}>
                <UnfilledButton text={"Manage User"}/>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 10 } }, // Set initial page size
    useSortBy,
    usePagination
  );


  return (
    <>
      <table {...getTableProps()} className='orglist-table table table-bordered'>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* <span style={{ marginLeft: '12px' }}>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? <i class="fa-solid fa-down-long"></i>
                        : <i class="fa-solid fa-up-long"></i>
                      : <i class="fa-solid fa-up-down"></i>}
                  </span> */}
                  {column.canSort && !column.disableSortBy && (
                    // Render your sorting icons here if sorting is enabled
                    <span style={{ marginLeft: '12px' }}>
                      {column.isSorted ? (column.isSortedDesc ? <i class="fa-solid fa-down-long"/> : <i class="fa-solid fa-up-long"/>) : <i class="fa-solid fa-up-down"/>}
                    </span>
                   )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination">
        <div>
          Showing {pageIndex * pageSize + 1} - {Math.min((pageIndex + 1) * pageSize, data.length)} of {data.length} entries
        </div>
        <div className='pagination-controls'>
          {/* <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button> */}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <i class="fa-solid fa-chevron-left" style={{color: "rgb(231, 76, 60)"}}></i>
          </button>
          {pageOptions.map(pageOption => (
            <button
              key={pageOption}
              onClick={() => gotoPage(pageOption)}
              style={{ fontWeight: pageIndex === pageOption ? 'bold' : 'normal' }}
            >
              {pageOption + 1}
            </button>
          ))}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            <i class="fa-solid fa-chevron-right" style={{color: "rgb(231, 76, 60)"}}></i>
          </button>
          {/* <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
          </button> */}
          <span style={{ marginLeft: '10px' }}>
            of {pageOptions.length}
          </span>
        </div>
      </div>
    </>
  );
};

export default DataTable;
