import { ManagerItem } from 'components/ManagerItem/ManagerItem';
import React, { useEffect, useState } from 'react';
import managersContacts from '../../data/managersData.json';
import { ManagersListStyle } from './ManagerList.styled';

export const ManagerList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(managersContacts);
  }, []);

  return (
    <>
      {contacts.length > 0 && (
        <ManagersListStyle>
          {contacts.map((contact, index) => (
            <ManagerItem key={contact.id} contact={contact} index={index} />
          ))}
        </ManagersListStyle>
      )}
    </>
  );
};
