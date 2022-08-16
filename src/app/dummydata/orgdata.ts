import { OrgData } from "angular-org-chart/src/app/modules/org-chart/orgData";

export const mockOrgdata: OrgData = {
  name: "Iron Man",
  type: 'CEO',
  children: [
      {
          name: "Captain America",
          type: 'VP',
          children: [
              {
                  name: "Hawkeye",
                  type: 'manager',
                  children: []
              },
              {
                  name: "Antman",
                  type: 'Manager',
                  children: []
              }
          ]
      },
      {
          name: "Black Widow",
          type: 'VP',
          children: [
              {
                  name: "Hulk",
                  type: 'manager',
                  children: [
                      {
                          name: "Spiderman",
                          type: 'Intern',
                          children: []
                      }
                  ]
              },
              {
                  name: "Thor",
                  type: 'Manager',
                  children: [
                      {
                          name: "Loki",
                          type: 'Team Lead',
                          children: []
                      }
                  ]
              }
          ]
      }
  ]
};
//
