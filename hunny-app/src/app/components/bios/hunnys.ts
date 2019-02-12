
export interface TeamMember {
  headshotImageUrl: string,
  name: string,
  nickname: string,
  active?: boolean

}

export const imgBase = '../assets/images/bios/';

export const HUNNY: TeamMember[] = [
  {
    name: 'Caytlynn Dilley',
    nickname: 'Hunny',
    headshotImageUrl: imgBase + 'Caytlynn-Dilley' + '.jpg',
    active: true
  },
  {
    name: 'Stacy Carlos',
    nickname: 'Hunny',
    headshotImageUrl: imgBase + 'Stacy-Carlos' + '.jpg',
    active: true
  },
  {
    name: 'Ashley Name',
    nickname: 'Hunny',
    headshotImageUrl: imgBase + 'Ashley-Name' + '.jpg',
    active: true
  },
  {
    name: 'Marlon Peralta',
    nickname: 'Hunny',
    headshotImageUrl: imgBase + 'Marlon-Peralta' + '.jpg',
    active: true
  },
  {
    name: 'Karen Carlos',
    nickname: 'Hunny',
    headshotImageUrl: imgBase + 'Karen-Carlos' + '.jpg',
    active: true
  },
  {
    name: '',
    nickname: 'Hunny',
    headshotImageUrl: imgBase + 'blank' + '.png',
    active: true
  },
  {
    name: '',
    nickname: 'Hunny',
    headshotImageUrl: imgBase + 'blank' + '.png',
    active: true
  }
];
