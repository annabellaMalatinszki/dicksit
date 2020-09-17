import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const Scoreboard = (props) => {
  return (
    <div>
      <Typography variant="h6">Scores</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="Scoreboard">
          <TableBody>
            {props.scores.map((score) => (
              <TableRow key={score.name}>
                <TableCell component="th" scope="row">
                  {score.name}
                </TableCell>
                <TableCell align="right">{score.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Scoreboard;
