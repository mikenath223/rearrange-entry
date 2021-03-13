import { useState } from 'react';
import { List, Input, Button } from 'components';
import { Grid } from '@material-ui/core';
import styles from 'App.module.css';

const HomePage = () => {
  const [entry, setEntry] = useState('_');
  const [listItems, setListItems] = useState([]);

  const handleAddEntry = () => {
    setListItems([entry, ...listItems]);
    setEntry('_')
  }

  return <main className={styles.wrapper}>
    <Grid container justify="center" spacing={0}>
      <Grid item xs>
        <Input entry={entry}
          handleSetEntry={(val) => setEntry(val)} />
      </Grid>
      <Grid item xs>
        <Button onClick={handleAddEntry} />
      </Grid>
    </Grid>
    <List listItems={listItems} />
  </main>
}

export default HomePage;