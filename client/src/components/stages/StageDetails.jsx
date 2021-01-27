import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import '../stages/stages.css';

const StageDetails = () => {
  const [currentStage, setCurrentStage] = useState({});
  const [stageData, setStageData] = useState(null);
  const history = useHistory();

  const getStageDetails = () => {
    const stageId = history.location.pathname.slice(18);
    axios
      .get(`/api/stages/${stageId}`)
      .then(results => setCurrentStage(results.data))
      .catch(error => swal('Operation failed', { icon: 'error' }));
  };
  useEffect(() => {
    getStageDetails();
  }, []);
  const handleChange = async event => {
    setStageData({ ...stageData, [event.target.name]: event.target.value });
  };
  const handleUpdateStage = async () => {
    const stageId = history.location.pathname.slice(18);
    await axios
      .patch(`/api/stages/${stageId}`, stageData)
      .then(results => console.log(results));
    swal('Stage Updated!', { icon: 'success' });
    history.push('/dashboard/stages');
  };
  return (
    <div className='new-stage-full'>
      <div>
        <div className=''>
          <input
            className='stage-name-input'
            cols='75'
            rows='10'
            name='name'
            type='text'
            defaultValue={currentStage?.name}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className='new-stage-dimensions'>
          <h3 className='dash-h3'>Stage Dimensions</h3>
        </div>
        <div className='new-stage-area'>
          <label for='width'>Width</label>
          <input
            className='stage-width'
            name='width'
            id='width'
            type='number'
            defaultValue={currentStage?.width}
            onChange={handleChange}
          />
          <br />
          <label for='depth'>Depth</label>
          <input
            className='stage-depth'
            name='depth'
            id='depth'
            type='number'
            defaultValue={currentStage?.depth}
            onChange={handleChange}
          />
        </div>
        <div className='new-stage-place'>
          <label for='isOutoor' className='dash-h4'>
            Indoor/Outdoor
          </label>
          {currentStage.isOutdoor ? (
            <select className='drop-stage'>
              <option value='true' name='isOutdoor'>
                Outdoor
              </option>
              <option value='false' name='isOutdoor'>
                Indoor
              </option>
            </select>
          ) : (
            <select className='drop-stage'>
              <option value='false' name='isOutdoor'>
                Indoor
              </option>
              <option value='true' name='isOutdoor'>
                Outdoor
              </option>
            </select>
          )}
        </div>
        <br />
        <div className='comment-box'>
          <div className='new-stage-comments-title'>
            <label className='dash-h3' for='comments-text-area'>
              Comments
            </label>
          </div>
          <div className='new-stage-comments'>
            <textarea
              id='comments-text-area'
              name='comments'
              rows='5'
              cols='75'
              placeholder='Comments about this stage'
              onChange={handleChange}
            />
            <br />
          </div>
          <br />
        </div>
        <div className='new-stage-button-box'>
          <button className='new-stage-button' onClick={handleUpdateStage}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default StageDetails;
