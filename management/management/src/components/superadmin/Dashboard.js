import React,{useState} from 'react'
import "./Dashboard.css"
import OverviewCard from './OverviewCard'
import DataTable from './DataTable'
import AddOrgButton from '../../common/AddOrgButton'
import Heading from '../../common/Heading'
const Dashboard = () => {
  const [filterInput, setFilterInput] = useState('');

  // Handle input change
  const handleFilterChange = e => {
    const value = e.target.value || '';
    setFilterInput(value);
  };

  return (
    <div className='dashboard'>
      {/* <h2>Admin Dashboard</h2> */}
      <Heading content={"Admin Dashboard"}/>
      <div className="overview">
        <div className="overview-header">
            <i class="fa-solid fa-users"></i>
            <h3>Overview</h3>
        </div>
        <div className='overview-main'>
            <OverviewCard title="Total Org" count="09" />
            <OverviewCard title="Total User" count="20" />
        </div>
      </div>
      <div className="orglist">
        <div className="orglist-header">
            <div>
                <i class="fa-solid fa-users"></i>
                <h3>Org List</h3>
            </div>
            <div>
                <input
                    type="text"
                    className="form-control"
                    value={filterInput}
                    onChange={handleFilterChange}
                    placeholder="Search by Org"
                    style={{
                    maxWidth: '250px',
                    marginRight: '10px',
                    borderRadius: '20px'
                    }}
                />
                <AddOrgButton/>
            </div> 
            </div>
        <div className='orglist-main'>
             <DataTable/> 
        </div>
        <div className="footer">
          <ul>
            <li>
              <a href="/terms">
                Terms
              </a>
            </li>
            <li>
              <a href="/privacy">
                Privacy
              </a>
            </li>
            <li>
              <a href="/program-policies">
                Program Policies
              </a>
            </li>
            <li>
              Last account activity: 3 hours ago
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Dashboard
