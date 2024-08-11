import React from 'react'

const OrgInfo = () => {
  return (
    <div className="org-info mt-4">
        <h3>Org Information</h3>

        <div >
            <form>
                <div className="row mb-3 mt-3">
                <div className="col-md-6">
                    <label htmlFor="orgName" className="form-label">Org Name*</label>
                    <input type="text" className="form-control" id="orgName" placeholder="Presbyterian Hospital" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="orgId" className="form-label">Org-ID*</label>
                    <input type="text" className="form-control" id="orgId" placeholder="1245415" />
                </div>
                </div>

                <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="orgType" className="form-label">Org Type*</label>
                    <select className="form-select" id="orgType">
                    <option selected>Provider</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="orgUrl" className="form-label">Org URL*</label>
                    <input type="text" className="form-control" id="orgUrl" placeholder="https://allymarhealthai.atlassian.net" />
                </div>
                </div>

                <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="orgDatabase" className="form-label">Org Database*</label>
                    <input type="text" className="form-control" id="orgDatabase" placeholder="Pres-0034" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="orgContact" className="form-label">Org Contact*</label>
                    <input type="text" className="form-control" id="orgContact" placeholder="Presbyterian-1245415-2024" />
                </div>
                </div>

                <div className="row mb-3">
                <div className="col-md-6">
                <label htmlFor="address" className="form-label">Address*</label>
                {/* <input type="text" className="form-control" id="address" placeholder="100 East 77th Street, New York, NY 10075" /> */}
                <textarea
                    id="address"
                    className="form-control"
                    rows="4"
                    placeholder="Enter your address"
                    style={{ resize: 'none' }} 
                />
                <div className="form-text">200 Character left</div>
                </div>
                </div>

                {/* <button type="submit" className="btn btn-primary">Submit</button> */}
            </form>
         </div>
    </div>
  )
}

export default OrgInfo
