import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => <p className="section-feedback__notification">{message}</p>;

export default Notification;