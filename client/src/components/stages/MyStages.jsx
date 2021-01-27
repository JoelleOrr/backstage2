import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import '../stages/stages.css';

const MyStages = () => {
  const [stages, setStages] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  const history = useHistory();

  const getStages = async () => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/api/stages`,
        withCredentials: true,
      });
      setStages(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStages();
  }, [isUpdated]);

  const handleStageDelete = async stageId => {
    try {
      setIsUpdated(!isUpdated);
      await axios.delete(`/api/stages/${stageId}`);
      swal('Stage deleted.', { icon: 'success' });
    } catch (error) {
      alert(error);
    }
  };

  const handleEditClick = stageId => {
    history.push(`/dashboard/stages/${stageId}`);
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
        {stages.map(stage1 => {
          return (
            <div className='saved-stage-event-card'>
              <br />
              <div className='saved-stage-inside-card'>
                <div className='saved-stage-inside-card-real'>
                  <h2 className='saved-stage-inside-card-text-info'>
                    {stage1?.name}
                  </h2>
                  <br />
                  <span className='saved-stage-card-text-outdoor'>
                    {stage1?.isOutdoor ? 'Outdoor' : 'Indoor'}
                  </span>
                  <span className='saved-stage-card-dimensions'>
                    {`Dimensions: ${stage1?.width} x ${stage1?.depth} ft.`}
                  </span>
                  <p className='saved-stage-card-text-comments'>
                    <em>{stage1?.comments}</em>
                  </p>
                </div>

                <div className='saved-stage-btn-area'>
                  <button
                    className='btn-2'
                    onClick={() => handleEditClick(stage1?._id)}
                  >
                    Edit
                  </button>

                  <button
                    className='btn-4'
                    onClick={() => handleStageDelete(stage1?._id)}
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
