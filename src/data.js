
export const question_bank = [
  //Do this for each question
        {
          question: "Besides cuccos, what enemy would make the tastiest dish?",
          answer_1_name: "Big Octo/Octorok",
          answer_1_points: 40,
          answer_1_addable: false,
          answer_2_name: "Dodongo",
          answer_2_points: 21,
          answer_2_addable: false,
          answer_3_name: "Lizalfos",
          answer_3_points: 10,
          answer_3_addable: false,
          answer_4_name: "Ganondorf",
          answer_4_points: 8,
          answer_4_addable: false,
          answer_5_name: "Guay",
          answer_5_points: 8,
          answer_5_addable: false,
        },
        {
          number: 1,
          answer_1_name: "Hover",
          answer_1_points: 52,
          answer_1_addable: false,
          answer_2_name: "Ground Jump",
          answer_2_points: 28,
          answer_2_addable: false,
          answer_3_name: "HESS",
          answer_3_points: 21,
          answer_3_addable: false,
          answer_4_name: "Superslide",
          answer_4_points: 21,
          answer_4_addable: false,
          answer_5_name: "Megaflip",
          answer_5_points: 9,
          answer_5_addable: false,
        },
      ];


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
