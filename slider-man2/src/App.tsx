import React from 'react';
import './App.css';
import { CssBaseline, IconButton, Input } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import { TextField } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      Input: {
        margin: theme.spacing(1),
        width: '1000rem',
      },
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '100ch',
    },
  }),
);

function App() {
  const classes = useStyles();

  const [value, setValue] = React.useState('why?');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      {/* CSSの反映 */}
      <CssBaseline />

      <form className={classes.root} noValidate autoComplete="off">

        <Input
          placeholder="新しい値を入力"
          inputProps={{ 'aria-label': 'description' }}
        />
        <IconButton aria-label="More" onClick={() => additem(value)}>
          <AddSharpIcon />
        </IconButton>
        <TextField
          className={classes.textField}
          id="reg-skill-text"
          label="memo:"
          multiline
          rowsMax={40}
          rows={10}
          value={value}
          onChange={handleChange}
        />

      </form>
    </div>
  );
}

// スキルを追加するメソッド
function additem(str: string) {
  // ここでファイルにテキストの内容を書き出す
  // 拡張子を自動判定する
  console.log(str);
}

export default App;

