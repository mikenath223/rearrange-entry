import { useState } from 'react';
import { List, Input, Button } from 'components';
import { Grid, Typography } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import styles from './home.module.css';

const HomePage = () => {
  const [entry, setEntry] = useState('_');
  const [listItems, setListItems] = useState([]);

  const handleAddEntry = () => {
    const item = { id: uuidv4(), entry };

    setListItems([item, ...listItems]);
    setEntry('');
  };

  return (
    <main className={styles.wrapper}>
      <Typography variant="h5" gutterBottom>
        Numbers Rearranger
      </Typography>
      <Grid container justify="center" alignItems="center" spacing={1}>
        <Grid item xs={7}>
          <Input
            entry={entry}
            handleSetEntry={val => setEntry(val)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button handleClick={handleAddEntry} isDisabled={entry.length !== 10} />
        </Grid>
      </Grid>
      <hr className={styles.divider} />
      <Typography variant="h6" gutterBottom>
        Phone Numbers
      </Typography>
      <List listItems={listItems} handleSetListItems={setListItems} />
    </main>
  );
};

export default HomePage;
