// src/components/MailboxDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function MailboxDetails({ mailboxes }) {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));

  if (!selectedBox) {
    return <h2>Mailbox Not Found!</h2>;
  }

  return (
    <div>
      <h2>Mailbox Details</h2>
      <p><strong>ID:</strong> {selectedBox._id}</p>
      <p><strong>Boxholder:</strong> {selectedBox.boxholder}</p>
      <p><strong>Box Size:</strong> {selectedBox.boxSize}</p>
    </div>
  );
}

export default MailboxDetails;
