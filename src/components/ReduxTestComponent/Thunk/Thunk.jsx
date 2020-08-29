import React, { useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styles from './Thunk.module.scss';
import { GlobalContext } from '../../../context/reducers/globalReducer';
import { ReduxTestCaseContext } from '../../../context/reducers/reduxTestCaseReducer';
import {
  deleteAsync,
  updateAsync,
  updateActionsFilePath,
  updateTypesFilePath,
} from '../../../context/actions/reduxTestCaseActions';
import ToolTipAsync from '../../ToolTip/ToolTipAsync';
import SearchInput from '../../SearchInput/SearchInput';

const closeIcon = require('../../../assets/images/close.png');
const dragIcon = require('../../../assets/images/drag-vertical.png');
const questionIcon = require('../../../assets/images/help-circle.png');

const Async = ({ async, index }) => {
  const [{ filePathMap }] = useContext(GlobalContext);
  const [, dispatchToReduxTestCase] = useContext(ReduxTestCaseContext);

  const handleChangeAsyncFields = (e, field) => {
    let updatedAsync = { ...async };
    updatedAsync[field] = e.target.value;
    dispatchToReduxTestCase(updateAsync(updatedAsync));
  };

  const handleClickDeleteAsync = (e) => {
    dispatchToReduxTestCase(deleteAsync(async.id));
  };

  return (
    <Draggable draggableId={async.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          id={styles.modal}
        >
          <img src={closeIcon} id={styles.close} alt='close' onClick={handleClickDeleteAsync} />

          <div id={styles.header}>
            <img src={dragIcon} alt='drag' />
            <h3>Asynchronous Action Creator</h3>
          </div>

          <div id={styles.groupFlexbox}>
            <div id={styles.labelInput}>
              <label htmlFor='it'>it should...</label>
              <input
                type='text'
                name='it'
                placeholder='eg/ on successful request return expected action'
                onChange={(e) => handleChangeAsyncFields(e, 'it')}
              />
            </div>

            <div id={styles.labelInput}>
              <label htmlFor='asyncFunction'>Action Creator</label>
              <input
                type='text'
                name='asyncFunction'
                onChange={(e) => handleChangeAsyncFields(e, 'asyncFunction')}
              />
            </div>

            <div id={styles.dropdownWrapper}>
              <label htmlFor='method'>Method (optional)</label>
              <div id={styles.dropdownFlex}>
                <select
                  id='method'
                  value={async.method}
                  onChange={(e) => handleChangeAsyncFields(e, 'method')}
                >
                  <option value='' />
                  <option value='get'>get</option>
                  <option value='post'>post</option>
                  <option value='put'>put</option>
                  <option value='delete'>delete</option>
                </select>
              </div>
            </div>
            <div id={styles.labelInput}>
              <label htmlFor='route'>Route (optional)</label>
              <div id={styles.inputFlexBox}>
                <input
                  type='text'
                  name='route'
                  placeholder='eg. /route'
                  onChange={(e) => handleChangeAsyncFields(e, 'route')}
                />
              </div>
            </div>
          </div>

          <div id={styles.groupFlexbox}>
            <div id={styles.labelInput}>
              <label htmlFor='responseKey'>Response Key</label>
              <div id={styles.inputFlexBox}>
                <input
                  type='text'
                  name='responseKey'
                  onChange={(e) => handleChangeAsyncFields(e, 'responseKey')}
                />
              </div>
            </div>
            <div id={styles.labelInput}>
              <label htmlFor='responseValue'> Response Value</label>
              <div id={styles.inputFlexBox}>
                <input
                  type='text'
                  name='responseValue'
                  onChange={(e) => handleChangeAsyncFields(e, 'responseValue')}
                />
              </div>
            </div>

            {/* <div id={styles.labelInput}>
              <label htmlFor='requestBody'>Request Body</label>
              <div id={styles.inputFlexBox}>
                <input
                  type='text'
                  name='requestBody'
                  onChange={(e) => handleChangeAsyncFields(e, 'requestBody')}
                />
                <span id={styles.hastooltip} role='tooltip'>
                  <img src={questionIcon} alt='help' />
                  <span id={styles.tooltip}>
                    <ToolTipAsync toolTipType={`object`} />
                  </span>
                </span>
              </div>
            </div> */}

            {/* <div id={styles.labelInput}>
              <label htmlFor='store'>Store</label>
              <div id={styles.inputFlexBox}>
                <input
                  type='text'
                  name='store'
                  onChange={(e) => handleChangeAsyncFields(e, 'store')}
                />
                <span id={styles.hastooltip} role='tooltip'>
                  <img src={questionIcon} alt='help' />
                  <span id={styles.tooltip}>
                    <ToolTipAsync toolTipType={`object`} />
                  </span>
                </span>
              </div>
            </div> */}
          </div>

          <div id={styles.groupFlexbox}>
            {/* <div id={styles.dropdownWrapper}>
              <label htmlFor='matcher'>Matcher</label>
              <div id={styles.dropdownFlex}>
                <select
                  id='matcher'
                  value={async.matcher}
                  onChange={(e) => handleChangeAsyncFields(e, 'matcher')}
                >
                  <option value='' />
                  <option value='toEqual'>toEqual</option>
                  <option value='toContainEqual'>toContainEqual</option>
                </select>
              </div>
            </div> */}

            <div id={styles.payloadFlexBox}>
              <div id={styles.labelInput}>
                <label htmlFor='payloadKey'>Payload Key (optional)</label>
                <input
                  type='text'
                  id='payloadKey'
                  onChange={(e) => handleChangeAsyncFields(e, 'payloadKey')}
                  placeholder='e.g. todo'
                />
              </div>
            </div>
            {/* <div id={styles.labelInput}>
              <label htmlFor='expectedResponse'>Expected Response</label>
              <div id={styles.inputFlexBox}>
                <input
                  type='text'
                  name='expectedResponse'
                  onChange={(e) => handleChangeAsyncFields(e, 'expectedResponse')}
                />
                <span id={styles.hastooltip} role='tooltip'>
                  <img src={questionIcon} alt='help' />
                  <span id={styles.tooltip}>
                    <ToolTipAsync toolTipType={`expectedResponse`} />
                  </span>
                </span>
              </div>
            </div> */}

            <div id={styles.labelInput}>
              <label htmlFor='actionType'>Action Type</label>
              <input
                type='text'
                id='actionType'
                onChange={(e) => handleChangeAsyncFields(e, 'actionType')}
                placeholder='e.g. ADD_TODO'
              />
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Async;
