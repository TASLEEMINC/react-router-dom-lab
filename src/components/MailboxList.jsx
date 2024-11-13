// src/components/MailboxList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './MailboxList.css';

function MailboxList({ mailboxes }) {
  return (
    <div>
      <h2>Mailboxes</h2>
      <div className="mailbox-list">
        {mailboxes.map((mailbox) => (
          <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`} className="mail-box">
            {mailbox._id}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MailboxList;
