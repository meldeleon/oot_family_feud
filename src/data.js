
export const question_bank = [
  //Do this for each question
        {
          question: "Besides cuccos, what enemy would make the tastiest dish?",
          question_1_name: "Big Octo/Octorok",
          question_1_points: 40,
          question_1_addable: false,
          question_2_name: "Dodongo",
          question_2_points: 21,
          question_2_addable: false,
          question_3_name: "Lizalfos",
          question_3_points: 10,
          question_3_addable: false,
          question_4_name: "Ganondorf",
          question_4_points: 8,
          question_4_addable: false,
          question_5_name: "Guay",
          question_5_points: 8,
          question_5_addable: false,
        },
      ];


export let game_data = {
  right_team_name: "Right Team",
  right_team_score: 0,
  left_team_name: "Left Team",
  left_team_score: 0,
  rounds: [
    {
      question: "Besides cuccos, what enemy would make the tastiest dish?",
      score: 0,
      strikes: 0,
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
  ],
  current_round_number: 1,
}
