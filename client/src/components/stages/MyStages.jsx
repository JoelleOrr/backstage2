import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import '../stages/stages.css';

const MyStages = () => {
  const [packages, setPackages] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  const history = useHistory();

  const getPackages = async () => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/api/packages`,
        withCredentials: true,
      });
      setPackages(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPackages();
  }, [isUpdated]);

  const handlePackageDelete = async packageId => {
    try {
      setIsUpdated(!isUpdated);
      await axios.delete(`/api/packages/${packageId}`);
      swal('Stage deleted.', { icon: 'success' });
    } catch (error) {
      alert(error);
    }
  };

  const handleEditClick = packageId => {
    history.push(`/dashboard/stages/${packageId}`);
  };

  return (
    <div className='my-stages-con'>
      <div className='dash-title-bar'>
        <button
          className='btn-4'
          onClick={() => history.push('/dashboard/new-stage')}
        >
          Add A New Stage
        </button>
      </div>

      <div className='saved-stage-out'>
        {packages.map(package1 => {
          return (
            <div className='saved-stage-event-card'>
              <br />
              <div className='saved-stage-inside-card'>
                <div className='saved-stage-inside-card-real'>
                  <h2 className='saved-stage-inside-card-text-info'>
                    {package1?.name}
                  </h2>
                  <br />
                  <span className='saved-stage-card-text-outdoor'>
                    {package1?.isOutdoor ? 'Outdoor' : 'Indoor'}
                  </span>
                  <span className='saved-stage-card-dimensions'>
                    {`Dimensions: ${package1?.width} x ${package1?.depth} ft.`}
                  </span>
                  <p className='saved-stage-card-text-comments'>
                    <em>{package1?.comments}</em>
                  </p>
                </div>

                <div className='saved-stage-btn-area'>
                  <button
                    className='btn-2'
                    onClick={() => handleEditClick(package1?._id)}
                  >
                    Edit
                  </button>

                  <button
                    className='btn-4'
                    onClick={() => handlePackageDelete(package1?._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyStages;
