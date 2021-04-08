import cameraImage from './asset/images/camera.jpeg'
import { faArchive, faClock, faCopy, faFile, faLock, faPercent, faPlus, faPrint, faShoppingCart, faToiletPaper, faTrashAlt, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ItemSelection = () => {
  return (
    <div className="col-md-8">
      <div className="d-flex justify-content-around">
        <div className="mx-1 float-left"><button className="btn btn-success btn-box"><span className="text-center text-dark btn-inside"><FontAwesomeIcon icon={faPlus} size="2x" /></span>
        </button>
        </div>
        <div className="mx-1 float-left"><button className="btn btn-primary btn-box"><span className="text-center text-dark btn-inside">
          <h5><b>Shirts</b></h5>
        </span></button>
        </div>
        <div className="mx-1 float-left"><button i className="btn btn-primary btn-box"><span className="text-center text-dark btn-inside">
          <h5><b>Dresses</b></h5>
        </span></button>
        </div>
        <div className="mx-1 float-left"><button className="btn btn-primary btn-box"><span className="text-center text-dark btn-inside">
          <h5><b>Jeans</b></h5>
        </span></button>
        </div>
        <div className="mx-1 float-left"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside"></span></button>
        </div>
        <div className="mx-1 float-left"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside"></span></button>
        </div>
        <div className="mx-1 float-left"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside"></span></button>
        </div>
      </div>
      <div className="d-flex justify-content-around my-2">
        <div className="mx-1"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside p-0"><img src={cameraImage} alt=""
            style={{
              width: '100%',
              height: '75%'
            }} /><b>$50.00</b></span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside p-0"><img src={cameraImage} alt=""
            style={{
              width: '100%',
              height: '75%'
            }} /><b>$50.00</b></span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside p-0"><img src={cameraImage} alt=""
            style={{
              width: '100%',
              height: '75%'
            }} /><b>$50.00</b></span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside p-0"><img src={cameraImage} alt=""
            style={{
              width: '100%',
              height: '75%'
            }} /><b>$50.00</b></span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside p-0"><img src={cameraImage} alt=""
            style={{
              width: '100%',
              height: '75%'
            }} /><b>$50.00</b></span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside p-0"><img src={cameraImage} alt=""
            style={{
              width: '100%',
              height: '75%'
            }} /><b>$50.00</b></span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside p-0"><img src={cameraImage} alt=""
            style={{
              width: '100%',
              height: '75%'
            }} /><b>$50.00</b></span></button>
        </div>
      </div>
      <div className="d-flex justify-content-around my-2">
        <div className="mx-1"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside p-0"></span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside p-0"></span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside p-0"></span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside p-0"></span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside p-0"></span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside p-0"></span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside p-0"></span></button>
        </div>
      </div>
      <div className="d-flex justify-content-around my-2">
        <div className="mx-1"><button className="btn btn-primary btn-box"><span className="text-center text-dark btn-inside">
          <div>
            <FontAwesomeIcon icon={faUser} size="2x" />
          </div>
        </span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span className="text-center text-dark btn-inside">
          <h5><b>Recent Sales</b></h5>
        </span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span className="text-center text-dark btn-inside">
          <h5><b>Pending Sales</b></h5>
        </span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span className="text-center text-dark btn-inside">
          <h5><b>Pickup Orders</b></h5>
        </span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span className="text-center text-dark btn-inside">
          <h5><b>Lanways</b></h5>
        </span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span className="text-center text-dark btn-inside">
          <h5><b>Close day</b></h5>
        </span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside p-0 pt-3">
          <div>
            <FontAwesomeIcon icon={faCopy} size="2x" />
          </div><b>X - Report</b>
        </span></button>
        </div>
      </div>
      <div className="d-flex justify-content-around my-2">
        <div className="mx-1"><button className="btn btn-primary btn-box"><span className="text-center text-dark btn-inside">
          <h5><b>Cash In/Out</b></h5>
        </span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside p-0 pt-3">
          <div>
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          </div><b>Stock & Price</b>
        </span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside p-0 pt-3">
          <div>
            <FontAwesomeIcon icon={faClock} size="2x" />
          </div><b>Clock In/Out</b>
        </span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span className="text-center text-dark btn-inside">
          <h6><b>Check Gift Card Balance</b></h6>
        </span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside p-0 pt-3">
          <div>
            <FontAwesomeIcon icon={faPrint} size="2x" />
          </div><b>Cupons</b>
        </span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span className="text-center text-dark btn-inside">
        </span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span className="text-center text-dark btn-inside">
        </span></button>
        </div>
      </div>
      <div className="d-flex justify-content-around my-2">
        <div className="mx-1"><button className="btn btn-primary btn-box"><span className="text-center text-dark btn-inside">
          <h5><b>New Sale</b></h5>
        </span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span className="text-center text-dark btn-inside">
          <h5><b>Save Sales</b></h5>
        </span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span className="text-center text-dark btn-inside">
          <h5><b>Save as Order</b></h5>
        </span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span className="text-center text-dark btn-inside">
          <h5><b>Save as layaway</b></h5>
        </span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside p-0 pt-3">
          <div>
            <FontAwesomeIcon icon={faPercent} size="2x" />
          </div><b>Discount</b>
        </span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span className="text-center text-dark btn-inside">
          <h5><b>Tax exempt</b></h5>
        </span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside p-0 pt-3">
          <div>
            <FontAwesomeIcon icon={faFile} size="2x" />
          </div><b>Notes</b>
        </span></button>
        </div>
      </div>
      <div className="d-flex justify-content-around my-2">
        <div className="mx-1"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside p-0 pt-3">
          <div>
            <FontAwesomeIcon icon={faToiletPaper} size="2x" />
          </div><b>Last Receipt</b>
        </span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside p-0 pt-3">
          <div>
            <FontAwesomeIcon icon={faArchive} size="2x" />
          </div><b>Cash Drawer</b>
        </span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span className="text-center text-dark btn-inside">
          <h5><b>Promotions</b></h5>
        </span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span className="text-center text-dark btn-inside">
          <h5><b>Cupons</b></h5>
        </span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span
          className="text-center text-dark btn-inside p-0 pt-3">
          <div>
            <FontAwesomeIcon icon={faPrint} size="2x" />
          </div><b>Receipt</b>
        </span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span className="text-center text-dark btn-inside">
          <h5><b>Add Shiping</b></h5>
        </span></button>
        </div>
        <div className="mx-1"><button className="btn btn-primary btn-box"><span className="text-center text-dark btn-inside">
        </span></button>
        </div>
      </div>
      <div className="row my-2 mx-0 w-100 mx-lg-auto">
        <div className="col-md-2"><button className="btn btn-warning btn-box w-100"><span
          className="text-center text-dark btn-inside">
          <FontAwesomeIcon icon={faUserFriends} size="2x" />
        </span></button>
        </div>
        <div className="col-md-2"><button className="btn btn-warning btn-box w-100"><span
          className="text-center text-dark btn-inside">
          <FontAwesomeIcon icon={faLock} size="2x" />
        </span></button>
        </div>
        <div className="col-md-4"><button className="btn btn-danger btn-box w-100" style={{
          width: '250px'
        }}><span
          className="text-center text-dark btn-inside">
            <span>
              <FontAwesomeIcon icon={faTrashAlt} size="2x" />
              <h3 className="d-inline"><b>SALE</b></h3>
            </span>
          </span></button>
        </div>
        <div className="col-md-4"><button className="btn btn-warning btn-box w-100"><span
          className="text-center text-dark btn-inside">
          <h3><b>PAY</b></h3>
        </span></button>
        </div>
      </div>
    </div >
  );
}

export default ItemSelection;