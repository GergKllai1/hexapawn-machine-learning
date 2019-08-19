# Hexapawn Machine Learning
##### Based on the paper of Martin Gardner, 1962
##### Deployed site can be found here: https://hexapawn-ml.netlify.com/

### Background
Hexapawn is a deterministic two-player game invented by Martin Gardner. It is played on a rectangular board of variable size, for example on a 3×3 board or on a chessboard. On a board of size n×m, each player begins with m pawns, one for each square in the row closest to them. The goal of each player is to advance one of their pawns to the opposite end of the board or to prevent the other player from moving.

Hexapawn on the 3×3 board is a solved game; with perfect play, white will always lose in 3 moves: (1.b2 axb2 2.cxb2 c2 3.a2 c1#). Indeed, Gardner specifically constructed it as a game with a small game tree, in order to demonstrate how it could be played by a heuristic AI implemented by a mechanical computer.

All the details about can be found here:

https://www.gwern.net/docs/rl/1991-gardner-ch8amatchboxgamelearningmachine.pdf

### Description

This program is representation of Gardner's matchbox machine learning example. The program is written using React.js and Firebase for data storage

### Useage

- Click on New Game, type in a name of your choosing and you can start playing.
- You can return to your game by clicking Load Game and selecting your instance.
- After about 11 lost matches the AI should have enough data to make you really hard to score a win.
