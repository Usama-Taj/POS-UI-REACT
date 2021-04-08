import { faAddressBook, faBaby } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Accumulation = () => {
  return (
    <div className="col-md-4">
      <div className="row">
        <div className="col-sm-6">
          <input type="text" name="search-customer" id="search-customer" className="form-control-lg w-75"
            placeholder="Customer" />
        </div>
        <div className="col-sm-6">
          <input type="text" name="search-product" id="search-product" className="form-control-lg w-75"
            placeholder="Product" />
        </div>
      </div>
      <div className="row mt-5">
        <div className="card border-0 w-100">
          <div className="card-title ml-3">
            <table>
              <tr>
                <td rowSpan="2"><FontAwesomeIcon icon={faBaby} size="5x" /></td>
                <td>
                  <h1>Jane Doe</h1>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>Laoyality Program</h6>
                </td>
              </tr>
            </table>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-4 border-right">
                <h5 className="text-secondary"><b>STORE</b></h5>
                <h1><b className="float-right">0.00</b></h1>
              </div>
              <div className="col-sm-4 border-right">
                <h5 className="text-secondary"><b>REWARD</b></h5>
                <h1><b className="float-right">4200</b></h1>
              </div>
              <div className="col-sm-4">
                <h5 className="text-secondary"><b>VISIT</b></h5>
                <h1><b className="float-right">19</b></h1>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-6"><button className="btn btn-warning btn-lg w-100 my-2"><FontAwesomeIcon icon={faAddressBook} /></button></div>
              <div className="col-sm-6"><button className="btn btn-primary btn-lg text-dark w-100 my-2"><b>PURCHASE</b></button>
              </div>
            </div>
            <div className="row mt-3 mx-1">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Code</th>
                    <th scope="col">City</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Red max-dress</td>
                    <td>101</td>
                    <td>1</td>
                    <td>50.00</td>
                  </tr>
                  <tr>
                    <td>Classic max-dress</td>
                    <td>111</td>
                    <td>2</td>
                    <td>30.00</td>
                  </tr>
                  <tr>
                    <td>Red max-dress</td>
                    <td>101</td>
                    <td>1</td>
                    <td>150.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-footer bg-light">
              <hr className="border border-secondary" />
              <div className="row d-flex justify-content-between">
                <div className="flex-column">
                  <h1><b>TOTAL</b></h1>
                </div>
                <div className="flex-column">
                  <h1><b className="float-right">$85.00</b></h1>
                </div>
              </div>
              <div className="row d-flex justify-content-between">
                <div className="flex-column">
                  <b>TAX</b>
                </div>
                <div className="flex-column">
                  <b className="float-right">$5.00</b>
                </div>
              </div>
              <div className="row d-flex justify-content-between">
                <div className="flex-column">
                  <b>NET</b>
                </div>
                <div className="flex-column">
                  <b className="float-right">$1.00</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accumulation;