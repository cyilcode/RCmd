import React from 'react';

export default class AddEditModal extends React.Component {
  render() {
    return (
      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add a new command</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input className="form-control" type="text" ref="txtCommand" placeholder="Your command shortcut(ex:notepad)" />
              <input className="form-control" style={{ marginTop: '1rem' }} type="text" ref="txtPath" placeholder="Path to the file to execute or URL of a website" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};