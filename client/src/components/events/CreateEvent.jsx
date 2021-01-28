import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventLink from './EventLink';
// import './events/createEvent.css';
import swal from 'sweetalert';
// import '../events/events.css';

const CreateEvent = ({ handleClose, show }) => {
  const [stages, setStages] = useState([]);
  const [selectedStage, setSelectedStage] = useState('');
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [showLinkClassName, setShowLinkClassName] = useState(false);
  const [eventURL, setEventURL] = useState('');
  const [showModal, setShowModal] = useState(false);

  const getStages = async () => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/api/stages`,
      });
      setStages(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStages();
  }, [showModal]);

  const handleSelectStage = stageId => {
    setSelectedStage(stageId);
  };

  const handleGenerateEvent = () => {
    if (!selectedStage) {
      swal('Please select a stage', { icon: 'warning' });
    }
    if (selectedStage) {
      axios
        .post('/api/events', {
          data: { eventTitle, eventDate, selectedStage },
        })
        .then(results =>
          setEventURL(
            `http://welcome-backstage.herokuapp.com/artist/${results.data._id}`
          )
        );
      setShowLinkClassName(true);
    }
  };
  return (
    <>
      {!showModal && (
        <button
          type='button'
          style={{
            position: 'relative',
            left: '59vw',
            margin: '0px',
            top: '27vh',
            height: '5rem',
            width: '15.5rem',
            border: '1px solid white',
            transition: 'all .15s ease',
          }}
          onClick={() => setShowModal(true)}
          className='btn-1'
        >
          Create Event
        </button>
      )}

      {showModal ? (
        <>
          <div className='event-modal-1'>
            <div className='event-modal-2'>
              <div className='event-modal-3'>
                {/*header*/}
                <div className='event-modal-4'>
                  <h3 className='event-modal-h3'>New Event</h3>
                </div>
                {/*body*/}
                <div className='event-modal-title'>
                  <input
                    id='event-title'
                    type='text'
                    placeholder='Event Title'
                    onInput={event => setEventTitle(event.target.value)}
                  />

                  <input
                    className='event-modal-date-select'
                    id='date-select'
                    type='date'
                    onInput={event => setEventDate(event.target.value)}
                  />

                  <h2 className='text-xl'>Select Stage</h2>

                  {stages.map(stage1 => {
                    return (
                      <div
                        key={stage1?._id}
                        className={
                          selectedStage === stage1?._id
                            ? 'individual-stage-container selected-pkg'
                            : 'individual-stage-container'
                        }
                        onClick={() => handleSelectStage(stage1?._id)}
                      >
                        <span className='text-xl'>{stage1?.name}</span>
                      </div>
                    );
                  })}
                </div>
                {/*footer*/}
                <div className='save-event-area'>
                  <div>
                    <button
                      className='btn-2'
                      type='button'
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      onClick={handleGenerateEvent}
                      type='button'
                      className='btn-1'
                    >
                      Generate Event Link
                    </button>
                  </div>

                  <EventLink display={showLinkClassName} eventURL={eventURL} />
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
};

export default CreateEvent;
