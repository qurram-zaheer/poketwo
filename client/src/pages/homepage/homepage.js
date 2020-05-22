import React from "react";
import "./homepage.styles.scss";
import { Layout } from "../layout";
import socketIO from "socket.io-client";
import { connect } from "react-redux";
import { setRoom, setTeam, setSocket } from "../../actions/authActions";
import { Redirect } from "react-router";

import StartCard from "../../components/start-card/startCard";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTeams: false,
      teamList: [
        [
          {
            name: "alakazam",
            moves: [
              {
                name: "psychic",
                power: "90",
                type: "special",
                acc: 100,
                moveType: "psychic",
              },
              {
                name: "focus blast",
                power: "130",
                type: "special",
                acc: 75,
                moveType: "fighting",
              },
              {
                name: "shadow ball",
                power: "90",
                type: "special",
                acc: 100,
                moveType: "ghost",
              },
              {
                name: "psyshock",
                power: "90",
                type: "special",
                acc: 100,
                moveType: "psychic",
              },
            ],
            stats: {
              hp: 400,
              def: 400,
              atk: 400,
              spd: 400,
              spa: 400,
              spe: 400,
            },
            active: 0,
            types: ["psychic"],
          },
          {
            name: "terrakion",
            moves: [
              {
                name: "stone edge",
                power: "120",
                type: "physical",
                acc: 80,
                moveType: "rock",
              },
              {
                name: "close combat",
                power: "125",
                type: "physical",
                acc: 100,
                moveType: "fighting",
              },
              {
                name: "earthquake",
                power: "100",
                type: "physical",
                acc: 100,
                moveType: "ground",
              },
              {
                name: "quick attack",
                power: "40",
                type: "physical",
                acc: 100,
                moveType: "normal",
              },
            ],
            stats: {
              hp: 400,
              def: 400,
              atk: 400,
              spd: 400,
              spa: 400,
              spe: 400,
            },
            active: 0,
            types: ["rock", "fighting"],
          },
          {
            name: "garchomp",
            moves: [
              {
                name: "stone edge",
                power: "120",
                type: "physical",
                acc: 80,
                moveType: "rock",
              },
              {
                name: "fire blast",
                power: "110",
                type: "special",
                acc: 80,
                moveType: "fire",
              },
              {
                name: "earthquake",
                power: "100",
                type: "physical",
                acc: 100,
                moveType: "ground",
              },
              {
                name: "dragon claw",
                power: "80",
                type: "physical",
                acc: 100,
                moveType: "dragon",
              },
            ],
            stats: {
              hp: 400,
              def: 400,
              atk: 400,
              spd: 400,
              spa: 400,
              spe: 400,
            },
            active: 0,
            types: ["dragon", "ground"],
          },
          {
            name: "serperior",
            moves: [
              {
                name: "leaf storm",
                power: "90",
                type: "special",
                acc: 100,
                moveType: "grass",
              },
              {
                name: "giga drain",
                power: "130",
                type: "special",
                acc: 75,
                moveType: "grass",
              },
              {
                name: "hp fire",
                power: "90",
                type: "special",
                acc: 100,
                moveType: "grass",
              },
              {
                name: "dragon pulse",
                power: "90",
                type: "special",
                acc: 100,
                moveType: "grass",
              },
            ],
            stats: {
              hp: 400,
              def: 400,
              atk: 400,
              spd: 400,
              spa: 400,
              spe: 400,
            },
            active: 0,
            types: ["grass"],
          },
          {
            name: "starmie",
            moves: [
              {
                name: "psychic",
                power: "90",
                type: "special",
                acc: 100,
                moveType: "psychic",
              },
              {
                name: "hydro pump",
                power: "130",
                type: "special",
                acc: 75,
                moveType: "water",
              },
              {
                name: "shadow ball",
                power: "90",
                type: "special",
                acc: 100,
                moveType: "ghost",
              },
              {
                name: "psyshock",
                power: "90",
                type: "special",
                acc: 100,
                moveType: "psychic",
              },
            ],
            stats: {
              hp: 400,
              def: 400,
              atk: 400,
              spd: 400,
              spa: 400,
              spe: 400,
            },
            active: 0,
            types: ["psychic", "water"],
          },
          {
            name: "talonflame",
            moves: [
              {
                name: "flare blitz",
                power: "120",
                type: "physical",
                acc: 100,
                moveType: "fire",
              },
              {
                name: "brave bird",
                power: "120",
                type: "physical",
                acc: 75,
                moveType: "flying",
              },
              {
                name: "steel wing",
                power: "80",
                type: "physical",
                acc: 100,
                moveType: "steel",
              },
              {
                name: "roost",
                power: "-",
                type: "n/a",
                acc: 100,
                moveType: "flying",
              },
            ],
            stats: {
              hp: 400,
              def: 400,
              atk: 400,
              spd: 400,
              spa: 400,
              spe: 400,
            },
            active: 0,
            types: ["flying", "fire"],
          },
        ],

        [
          {
            name: "slowbro",
            moves: [
              {
                name: "psychic",
                power: "90",
                type: "special",
                acc: 100,
                moveType: "psychic",
              },
              {
                name: "scald",
                power: "80",
                type: "special",
                acc: 75,
                moveType: "water",
              },
              {
                name: "shadow ball",
                power: "90",
                type: "special",
                acc: 100,
                moveType: "ghost",
              },
              {
                name: "psyshock",
                power: "90",
                type: "special",
                acc: 100,
                moveType: "psychic",
              },
            ],
            stats: {
              hp: 400,
              def: 400,
              atk: 400,
              spd: 400,
              spa: 400,
              spe: 400,
            },
            active: 0,
            types: ["psychic", "water"],
          },
          {
            name: "infernape",
            moves: [
              {
                name: "close combat",
                power: "125",
                type: "",
                acc: 100,
                moveType: "fighting",
              },
              {
                name: "flare blitz",
                power: "120",
                type: "physical",
                acc: 75,
                moveType: "fire",
              },
              {
                name: "mach punch",
                power: "40",
                type: "physical",
                acc: 100,
                moveType: "fighting",
              },
              {
                name: "fire blase",
                power: "110",
                type: "physical",
                acc: 100,
                moveType: "fire",
              },
            ],
            stats: {
              hp: 400,
              def: 400,
              atk: 400,
              spd: 400,
              spa: 400,
              spe: 400,
            },
            active: 0,
            types: ["fire", "fighting"],
          },
          {
            name: "haxorus",
            moves: [
              {
                name: "outrage",
                power: "120",
                type: "physical",
                acc: 100,
                moveType: "dragon",
              },
              {
                name: "earthquake",
                power: "100",
                type: "physical",
                acc: 75,
                moveType: "ground",
              },
              {
                name: "dragon claw",
                power: "90",
                type: "physical",
                acc: 100,
                moveType: "dragon",
              },
              {
                name: "dragon dance",
                power: "-",
                type: "n/a",
                acc: 100,
                moveType: "dragon",
              },
            ],
            stats: {
              hp: 400,
              def: 400,
              atk: 400,
              spd: 400,
              spa: 400,
              spe: 400,
            },
            active: 0,
            types: ["dragon"],
          },
          {
            name: "bisharp",
            moves: [
              {
                name: "knock off",
                power: "97",
                type: "physical",
                acc: 100,
                moveType: "dark",
              },
              {
                name: "sucker punch",
                power: "90",
                type: "physical",
                acc: 75,
                moveType: "dark",
              },
              {
                name: "iron head",
                power: "90",
                type: "physical",
                acc: 100,
                moveType: "steel",
              },
              {
                name: "swords dance",
                power: "-",
                type: "n/a",
                acc: 100,
                moveType: "normal",
              },
            ],
            stats: {
              hp: 400,
              def: 400,
              atk: 400,
              spd: 400,
              spa: 400,
              spe: 400,
            },
            active: 0,
            types: ["dark", "steel"],
          },
          {
            name: "hippowdon",
            moves: [
              {
                name: "earthquake",
                power: "100",
                type: "physical",
                acc: 100,
                moveType: "grounw",
              },
              {
                name: "stone edge",
                power: "120",
                type: "physical",
                acc: 75,
                moveType: "rock",
              },
              {
                name: "sandstorm",
                power: "-",
                type: "n/a",
                acc: 100,
                moveType: "rock",
              },
              {
                name: "slack off",
                power: "-",
                type: "n/a",
                acc: 100,
                moveType: "normal",
              },
            ],
            stats: {
              hp: 400,
              def: 400,
              atk: 400,
              spd: 400,
              spa: 400,
              spe: 400,
            },
            active: 0,
            types: ["ground"],
          },
          {
            name: "latios",
            moves: [
              {
                name: "psychic",
                power: "90",
                type: "special",
                acc: 100,
                moveType: "psychic",
              },
              {
                name: "draco meteor",
                power: "130",
                type: "special",
                acc: 95,
                moveType: "dragon",
              },
              {
                name: "shadow ball",
                power: "90",
                type: "special",
                acc: 100,
                moveType: "ghost",
              },
              {
                name: "psyshock",
                power: "90",
                type: "special",
                acc: 100,
                moveType: "psychic",
              },
            ],
            stats: {
              hp: 400,
              def: 400,
              atk: 400,
              spd: 400,
              spa: 400,
              spe: 400,
            },
            active: 0,
            types: ["psychic", "dragon"],
          },
        ],
      ],
      activeTeam: 0,
      pokeData: [],
      newTeam: [],
      redirect: false,
      viewMoves: false,
      selectionActivePoke: null,
      moveList: [],
      userMoves: {},
    };
  }

  async componentDidMount() {
    const idArray = [...Array(100).keys()].map((x) => x + 1);
    idArray.map((id) => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => res.json())
        .then((data) => {
          let joined = this.state.pokeData.concat({
            stats: data.stats,
            name: data.name,
            img: data.sprites.front_default,
            id: data.id,
          });
          this.setState({
            pokeData: joined,
          });
        })
        .then((res) => {
          let sortedData = this.state.pokeData.sort((a, b) =>
            a.id > b.id ? 1 : -1
          );
          this.setState({ pokeData: sortedData });
        });
      return 1;
    });
  }

  showTeams = () => this.setState({ showTeams: !this.state.showTeams });
  setActive = (index) => this.setState({ activeTeam: index });
  updateTeam = async (name) => {
    await this.setState({
      newTeam: this.state.newTeam.concat({
        name: name,
      }),
      viewMoves: true,
      selectionActivePoke: name,
    });
    this.moveSelection();
  };
  renderCreation = (member) => {
    let pokemon = this.state.pokeData.find((item) => item.name === member.name);
    return (
      <div className="cp-poke">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img
            src={`https://img.pokemondb.net/sprites/bank/normal/${pokemon.name}.png`}
            alt={pokemon.name}
          ></img>
          <button
            onClick={() => {
              if (
                !this.state.userMoves[pokemon.name] ||
                this.state.userMoves[pokemon.name].length < 4
              ) {
                return alert("You must pick atleast 4 moves");
              }
              return this.setState({
                viewMoves: false,
                moveList: [],
              });
            }}
          >
            Save Pokemon
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {this.state.userMoves[pokemon.name]
            ? this.state.userMoves[pokemon.name].map((move) => {
                return <input type="text" readOnly value={move.name}></input>;
              })
            : null}
        </div>
      </div>
    );
  };
  saveTeam = () => {
    let decided = [];
    let stats = {};
    let types = [];
    console.log(Object.keys(this.state.userMoves));
    if (Object.keys(this.state.userMoves.length < 6)) {
      console.log("LESS");
      return alert("Please select 6 pokemon");
    }
    for (let [key, value] of Object.entries(this.state.userMoves)) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${key}`)
        .then((data) => data.json())
        .then((res) => {
          stats.spe =
            (Math.floor(
              (2 * res.stats[0].base_stat + 31 + Math.floor(252 / 4) * 100) /
                100
            ) +
              5) *
            1.1;
          stats.spd =
            (Math.floor(
              (2 * res.stats[0].base_stat + 31 + Math.floor(252 / 4) * 100) /
                100
            ) +
              5) *
            1.1;
          stats.spa =
            (Math.floor(
              (2 * res.stats[0].base_stat + 31 + Math.floor(252 / 4) * 100) /
                100
            ) +
              5) *
            1.1;
          stats.def =
            (Math.floor(
              (2 * res.stats[0].base_stat + 31 + Math.floor(252 / 4) * 100) /
                100
            ) +
              5) *
            1.1;
          stats.atk =
            (Math.floor(
              (2 * res.stats[0].base_stat + 31 + Math.floor(252 / 4) * 100) /
                100
            ) +
              5) *
            1.1;
          stats.hp =
            Math.floor(
              (2 * res.stats[0].base_stat + 31 + Math.floor(252 / 4) * 100) /
                100
            ) +
            100 +
            10;
          res.types.map((entry) => types.push(entry.type.name));
          decided.push({
            name: key,
            moves: value,
            stats: stats,
            types: types,
            active: 0,
          });
        });
    }
    this.setState({
      teamList: this.state.teamList.concat([decided]),
      newTeam: [],
      viewMoves: false,
      moveList: [],
    });
  };
  findGame = () => {
    if (!this.props.isAuthenticated) {
      return alert("You must be logged in to play a game");
    }

    const socket = socketIO("http://localhost:5000");
    this.props.setSocket(socket);
    socket.emit(
      "join",
      {
        username: this.props.user.username,
        team: this.state.teamList[this.state.activeTeam],
      },
      (room) => {
        this.props.setRoom({ room });
        socket.emit("play-turn", {
          username: this.props.user.username,
          room,
          gameStart: true,
        });
      }
    );

    socket.on("starting-game", ({ team, enemy, username }) => {
      if (this.props.user.username !== username) {
        this.props.setTeam({ team: enemy, enemy: team, origTeam: enemy });
      } else {
        this.props.setTeam({ team, enemy, origTeam: team });
      }

      this.setState({ redirect: true });
    });
  };
  moveSelection = () => {
    let moveList = [];
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.selectionActivePoke}`)
      .then((res) => res.json())
      .then((res) => {
        res.moves.map((entry, index) => {
          if (index < 1000) {
            fetch(entry.move.url)
              .then((moveRes) => moveRes.json())
              .then((final) => {
                moveList.push({
                  name: final.name,
                  power: final.power,
                  type: final.damage_class.name,
                  accuracy: final.accuracy,
                  moveType: final.type.name,
                });
                return 1;
              })
              .then((data) => {
                return this.setState({ moveList });
              });
          }
          return 1;
        });
        return 1;
      });
  };
  addMove = ({ pokemon, name, power, type, acc, moveType }) => {
    let temp = this.state.userMoves;
    if (!temp[pokemon]) {
      temp[pokemon] = [];
    }
    temp[pokemon].push({ name, power, type, acc, moveType });

    this.setState({
      userMoves: temp,
    });
  };

  render() {
    const idArray = [...Array(100).keys()].map((x) => x + 1);
    const sixRange = [...Array(6).keys()];
    if (this.state.redirect) {
      return <Redirect to="/battle"></Redirect>;
    }
    return (
      <Layout>
        <div className="homepage-container">
          <div className="play-half">
            <StartCard
              teamToggle={this.showTeams}
              setActive={this.setActive}
              showTeams={this.state.showTeams}
              teamList={this.state.teamList}
              activeTeam={this.state.activeTeam}
            />
            <div className="start-btn" onClick={this.findGame}>
              Find game
            </div>
          </div>

          <div className="selection-half">
            <div className="selection-container">
              <div className="cur-team"></div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className="save-button" onClick={this.saveTeam}>
                  SAVE TEAM
                </div>
              </div>
              <div className="poke-finder">
                <div className="searchbox"></div>
                <div className="creation-prev">
                  {this.state.newTeam.map((member) =>
                    this.renderCreation(member)
                  )}
                </div>
                {this.state.viewMoves ? (
                  this.state.moveList.map((move) => {
                    return (
                      <div
                        className="move-row"
                        key={move.name}
                        onClick={() =>
                          this.addMove({
                            pokemon: this.state.selectionActivePoke,
                            name: move.name,
                            power: move.power,
                            type: move.type,
                            acc: move.accuracy,
                            moveType: move.moveType,
                          })
                        }
                      >
                        <div style={{ width: "60%" }}>{move.name}</div>
                        <div style={{ width: "30%" }}>
                          {move.power || "N/A"}
                        </div>

                        {move.type === "physical" ? (
                          <div className="phys-block"></div>
                        ) : move.type === "special" ? (
                          <div className="spec-block"></div>
                        ) : (
                          <div className="norm-block"></div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div>
                    <div
                      className="poke-row"
                      style={{
                        borderRadius: "0px",
                        borderBottom: "1px solid grey",
                      }}
                    >
                      <div
                        className="single-stat"
                        style={{ width: "170px", textAlign: "center" }}
                      >
                        Name
                      </div>
                      <div
                        className="single-stat"
                        style={{
                          margin: "auto",
                          marginRight: "20px",
                        }}
                      >
                        Speed
                      </div>
                      <div
                        className="single-stat"
                        style={{
                          margin: "auto",
                          marginRight: "20px",
                        }}
                      >
                        {" "}
                        SpDef
                      </div>
                      <div
                        className="single-stat"
                        style={{
                          margin: "auto",
                          marginRight: "20px",
                        }}
                      >
                        SpA
                      </div>
                      <div
                        className="single-stat"
                        style={{
                          margin: "auto",
                          marginRight: "20px",
                        }}
                      >
                        Defense{" "}
                      </div>
                      <div
                        className="single-stat"
                        style={{
                          margin: "auto",
                          marginRight: "20px",
                        }}
                      >
                        Attack
                      </div>
                      <div
                        className="single-stat"
                        style={{
                          margin: "auto",
                          marginRight: "20px",
                        }}
                      >
                        HP
                      </div>
                    </div>
                    {this.state.pokeData.length < 100 ? (
                      <div>LOADING ... </div>
                    ) : (
                      idArray.map((arrayId) => {
                        if (this.state.pokeData[arrayId]) {
                          return (
                            <div
                              className="poke-row"
                              key={this.state.pokeData[arrayId].id}
                              onClick={() =>
                                this.updateTeam(
                                  this.state.pokeData[arrayId].name
                                )
                              }
                            >
                              <div
                                className="single-stat"
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  width: "170px",
                                  justifyContent: "flex-start",
                                }}
                              >
                                <img
                                  src={`https://img.pokemondb.net/sprites/sword-shield/icon/${this.state.pokeData[arrayId].name}.png`}
                                  alt={this.state.pokeData[arrayId].name}
                                ></img>
                                <div
                                  style={{
                                    margin: "auto",
                                    marginLeft: "5px",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  {this.state.pokeData[arrayId].name}
                                </div>
                              </div>
                              {sixRange.map((index) => {
                                return (
                                  <div
                                    className="single-stat"
                                    style={{
                                      margin: "auto",
                                      marginRight: "20px",
                                    }}
                                    key={
                                      this.state.pokeData[arrayId].stats[index]
                                        .stat.name
                                    }
                                  >
                                    {
                                      this.state.pokeData[arrayId].stats[index]
                                        .base_stat
                                    }
                                  </div>
                                );
                              })}
                            </div>
                          );
                        }
                        return 1;
                      })
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  user: state.auth.user,
  room: state.auth.room,
});
export default connect(mapStateToProps, { setRoom, setTeam, setSocket })(
  Homepage
);
