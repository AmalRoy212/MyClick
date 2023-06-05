import React,{ useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard } from 'mdb-react-ui-kit';
import './Loading.css';
import PuffLoader from "react-spinners/ClipLoader";

function Loding() {
  let [loading, setLoading] = useState();
  let [color, setColor] = useState();
  setLoading(true);
  setColor('black');
  return (
    <div className='bodyHolder'>
      <MDBContainer className=" h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard style={{ width: '100%', marginTop: '7rem', border: 'none' }}>
              <div className='holderDiv'>
                <PuffLoader
                  color={color}
                  loading={loading}
                  size={50}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default Loding;
