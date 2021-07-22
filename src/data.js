export let game_data = {
  right_team_name: "Right Team",
  right_team_score: 0,
  left_team_name: "Left Team",
  left_team_score: 0,
  current_round_number: 1,
}

export let rounds = [
  {
    question: "Besides cuccos, what enemy would make the tastiest dish?",
    score: 0,
    strikes: 0,
    number: 0,
    answers: [
      {
        number: 1,
        name: "Big Octo/Octorok",
        points: 40,
        addable: false,
      },
      {
        number: 2,
        name: "Dodongo",
        points: 21,
        addable: false,
      },
      {
        number: 3,
        name: "Lizalfos",
        points: 10,
        addable: false,
      },
      {
        number: 4,
        name: "Ganondorf",
        points: 8,
        addable: false,
      },
      {
        number: 5,
        name: "Guay",
        points: 8,
        addable: false,
      },
    ],
    winning_team: "",
  },
  {
    question: "Name a bomb trick.",
    score: 0,
    strikes: 0,
    number: 1,
    answers: [
      {
        number: 1,
        name: "Hover",
        points: 52,
        addable: false,
      },
      {
        number: 2,
        name: "Ground Jump",
        points: 28,
        addable: false,
      },
      {
        number: 3,
        name: "HESS",
        points: 21,
        addable: false,
      },
      {
        number: 4,
        name: "Superslide",
        points: 21,
        addable: false,
      },
      {
        number: 5,
        name: "Megaflip",
        points: 9,
        addable: false,
      },
    ],
    winning_team: "",
  },
]
