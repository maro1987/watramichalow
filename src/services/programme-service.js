export default function loadProgrammeData() {
  return Promise.resolve([
    {
      dayId: 'day.friday',
      date: '5.08',
      agenda: [
        {
          nameId: 'programme.floralTribute.title',
          descriptionId: 'programme.floralTribute.description',
          imgUrl: 'http://watramichalow.pl/images/zlozeniekwiatow.jpg',
          time: '19:00',
          type: 'official'
        },
        {
          nameId: 'programme.starting.title',
          descriptionId: 'programme.starting.description',
          imgUrl: 'http://watramichalow.pl/images/przywitanie.jpg',
          time: '19:15',
          type: 'official'
        },
        {
          id: 'lastiwoczka',
          type: 'concert'
        },
        {
          nameId: 'programme.nikifor.title',
          descriptionId: 'programme.nikifor.description',
          imgUrl: 'http://watramichalow.pl/images/nikifory.jpg',
          time: '20:15',
          type: 'official'
        },
        {
          id: 'teroczka',
          type: 'concert'
        },
        {
          id: 'rekarpaty',
          type: 'concert'
        },
        {
          id: 'romba',
          type: 'concert'
        },
        {
          id: 'hrdza',
          type: 'concert'
        },
        {
          id: 'demaj',
          type: 'concert'
        }
      ]
    },
    {
      dayId: 'day.saturday',
      date: '6.08',
      agenda: [
        {
          id: 'barvinok',
          type: 'concert'
        },
        {
          id: 'kyczerka',
          nameId: 'Kyczerka / Lastiwczata',
          type: 'concert'
        },
        {
          nameId: 'programme.kids.title',
          descriptionId: 'programme.kids.description',
          imgUrl: 'http://watramichalow.pl/images/dity.jpg',
          time: '15.45',
          type: 'official'
        },
        {
          nameId: 'programme.break.title',
          descriptionId: 'programme.break.description',
          imgUrl: 'http://watramichalow.pl/images/prerwa.jpg',
          time: '17.00',
          type: 'official'
        },
        {
          id: 'roztoka',
          type: 'concert'
        },
        {
          id: 'barvinok',
          time: '18:45',
          type: 'concert'
        },
        {
          id: 'latajacydywan',
          type: 'concert'
        },
        {
          id: 'fajnaferajna',
          type: 'concert'
        },
        {
          id: 'kyczera',
          type: 'concert'
        },
        {
          id: 'lemkobluegrassband',
          type: 'concert'
        },
        {
          id: 'krambabula',
          type: 'concert'
        },
        {
          id: 'wodohraj',
          type: 'concert'
        }
      ]
    }]
  );
}
