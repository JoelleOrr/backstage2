import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MyStages from '../components/stages/MyStages';
import NewStage from '../components/stages/NewStage';
import MyEvents from '../components/events/MyEvents';
// import CreateEvent from '../components/events/createEvent/CreateEvent';
import MyEquipment from '../components/equipment/MyEquipment';
// import StageDetails from '../components/stages/StageDetails';
// import AddImage from '../components/AddImage';
import '../pages/Dashboard.css';

class Dashboard extends React.Component {
  state = { show: false, image: null, preview: null, currentTab: 'equip' };

  render() {
    return (
      <div className='profile-container'>
        <div
          className='header-container'
          style={{
            backgroundImage: "url('../dashboard-images/jennyblock2.png')",
            height: '36vh',
          }}
        >
          <div className='profile-picture'>{/* <AddImage /> */}</div>

          {/* <CreateEvent show={this.state.show} /> */}
        </div>
        <BrowserRouter>
          <div className='nav-div'>
            <Link
              to='/dashboard/events'
              onClick={() => this.setState({ currentTab: 'events' })}
              className={`dash-tab ${
                this.state.currentTab === 'events'
                  ? 'selected-tab'
                  : 'unselected-tab'
              }`}
            >
              My Events
            </Link>
            <Link
              to='/dashboard/stages'
              onClick={() => this.setState({ currentTab: 'stages' })}
              className={`stage-tab ${
                this.state.currentTab === 'stages'
                  ? 'selected-tab'
                  : 'unselected-tab'
              }`}
            >
              My Stages
            </Link>
            <Link
              to='/dashboard/equipment'
              onClick={() => this.setState({ currentTab: 'equip' })}
              className={`equip-tab ${
                this.state.currentTab === 'equip'
                  ? 'selected-tab'
                  : 'unselected-tab'
              }`}
            >
              My Equipment{' '}
            </Link>
          </div>

          <Switch>
            <Route exact path='/dashboard/events' component={MyEvents} />
            <Route exact path='/dashboard/new-stage' component={NewStage} />
            {/* <Route
              exact
              path="/dashboard/stages/:id"
              component={StageDetails}
            /> */}
            <Route exact path='/dashboard/stages' component={MyStages} />
            <Route exact path='/dashboard/equipment' component={MyEquipment} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Dashboard;
