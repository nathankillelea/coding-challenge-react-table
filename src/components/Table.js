import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Table.module.css';

const Table = ({data, setData, filter}) => {
  const [sort, setSort] = useState('ID_ASC');

  useEffect(() => {
    switch(sort) {
      case 'ID_ASC':
        setData([...data].sort((a, b) => a.id - b.id));
        break;
      case 'ID_DESC':
        setData([...data].sort((a, b) => b.id - a.id));
        break;
      case 'FIRST_NAME_ASC':
        setData([...data].sort((a, b) => a.first_name.localeCompare(b.first_name)));
        break;
      case 'FIRST_NAME_DESC':
        setData([...data].sort((a, b) => b.first_name.localeCompare(a.first_name)));
        break;
      case 'LAST_NAME_ASC':
        setData([...data].sort((a, b) => a.last_name.localeCompare(b.last_name)));
        break;
      case 'LAST_NAME_DESC':
        setData([...data].sort((a, b) => b.last_name.localeCompare(a.last_name)));
        break;
      case 'EMAIL_ASC':
        setData([...data].sort((a, b) => a.email.localeCompare(b.email)));
        break;
      case 'EMAIL_DESC':
        setData([...data].sort((a, b) => b.email.localeCompare(a.email)));
        break;
      case 'JOB_TITLE_ASC':
        setData([...data].sort((a, b) => a.job_title.localeCompare(b.job_title)));
        break;
      case 'JOB_TITLE_DESC':
        setData([...data].sort((a, b) => b.job_title.localeCompare(a.job_title)));
        break;
      case 'FAVORITE_ANIME_ASC':
        setData([...data].sort((a, b) => a.favorite_anime.localeCompare(b.favorite_anime)));
        break;
      case 'FAVORITE_ANIME_DESC':
        setData([...data].sort((a, b) => b.favorite_anime.localeCompare(a.favorite_anime)));
    }
  }, [sort]);

  const filteredData = filter && filter !== 'All' ? data.filter(data => {
    return data.section === filter;
  }) : data;

  const users = filteredData.map(data => {
    let color = '';

    switch(data.section) {
      case 'Teal':
        color = 'rgb(0, 128, 128)';
        break;
      case 'Indigo':
        color = 'rgb(63, 0, 255)';
        break;
      case 'Purple':
        color = 'rgb(128, 0, 128)';
        break;
      case 'Maroon':
        color = 'rgb(128, 0, 0)';
        break;
      case 'Orange':
        color = 'rgb(255, 128, 0)';
        break;
      case 'Khaki':
        color = 'rgb(195, 176, 145)';
        break;
      case 'Puce':
        color = 'rgb(204, 136, 153)';
        break;
      case 'Aquamarine':
        color = 'rgb(127, 255, 212)';
        break;
      case 'Yellow':
        color = 'rgb(255, 255, 0)';
        break;
      case 'Pink':
        color = 'rgb(255, 192, 203)';
        break;
      case 'Red':
        color = 'rgb(255, 0, 0)';
        break;
      case 'Fuscia':
        color = 'rgb(255, 0, 255)';
        break;
      case 'Mauv':
        color = 'rgb(224, 176, 255)';
        break;
      case 'Green':
        color = 'rgb(0, 255, 0)';
        break;
      case 'Crimson':
        color = 'rgb(220, 20, 60)';
        break;
      case 'Turquoise':
        color = 'rgb(64, 224, 208)';
        break;
      case 'Violet':
        color = 'rgb(127, 0, 255)';
        break;
      case 'Goldenrod':
        color = 'rgb(218, 165, 32)';
        break;
      case 'Blue':
        color = 'rgb(0, 0, 255)';
        break;
      default:
        color = 'rgb(0, 0, 0)';
    };

    return (
      <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.first_name}</td>
        <td>{data.last_name}</td>
        <td><a href={'mailto:' + data.email}>{data.email}</a></td>
        <td>{data.job_title}</td>
        <td>{data.favorite_anime}</td>
        <td><div className={styles.colorSplotch} style={{backgroundColor: color}} />{data.section}</td>
      </tr>
    );
  });

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            {sort === 'ID_ASC' ? <th onClick={() => setSort('ID_DESC')}>ID<FontAwesomeIcon icon={faCaretUp} className={styles.caretIcon} /></th> : sort==='ID_DESC' ? <th onClick={() => setSort('ID_ASC')}>ID<FontAwesomeIcon icon={faCaretDown} className={styles.caretIcon} /></th> : <th onClick={() => setSort('ID_ASC')}>ID</th> }
            {sort === 'FIRST_NAME_ASC' ? <th onClick={() => setSort('FIRST_NAME_DESC')}>FIRST NAME<FontAwesomeIcon icon={faCaretUp} className={styles.caretIcon} /></th> : sort==='FIRST_NAME_DESC' ? <th onClick={() => setSort('FIRST_NAME_ASC')}>FIRST NAME<FontAwesomeIcon icon={faCaretDown} className={styles.caretIcon} /></th> : <th onClick={() => setSort('FIRST_NAME_ASC')}>FIRST NAME</th> }
            {sort === 'LAST_NAME_ASC' ? <th onClick={() => setSort('LAST_NAME_DESC')}>LAST NAME<FontAwesomeIcon icon={faCaretUp} className={styles.caretIcon} /></th> : sort==='LAST_NAME_DESC' ? <th onClick={() => setSort('LAST_NAME_ASC')}>LAST NAME<FontAwesomeIcon icon={faCaretDown} className={styles.caretIcon} /></th> : <th onClick={() => setSort('LAST_NAME_ASC')}>LAST NAME</th> }
            {sort === 'EMAIL_ASC' ? <th onClick={() => setSort('EMAIL_DESC')}>EMAIL<FontAwesomeIcon icon={faCaretUp} className={styles.caretIcon} /></th> : sort==='EMAIL_DESC' ? <th onClick={() => setSort('EMAIL_ASC')}>EMAIL<FontAwesomeIcon icon={faCaretDown} className={styles.caretIcon} /></th> : <th onClick={() => setSort('EMAIL_ASC')}>EMAIL</th> }
            {sort === 'JOB_TITLE_ASC' ? <th onClick={() => setSort('JOB_TITLE_DESC')}>JOB TITLE<FontAwesomeIcon icon={faCaretUp} className={styles.caretIcon} /></th> : sort==='JOB_TITLE_DESC' ? <th onClick={() => setSort('JOB_TITLE_ASC')}>JOB TITLE<FontAwesomeIcon icon={faCaretDown} className={styles.caretIcon} /></th> : <th onClick={() => setSort('JOB_TITLE_ASC')}>JOB TITLE</th> }
            {sort === 'FAVORITE_ANIME_ASC' ? <th onClick={() => setSort('FAVORITE_ANIME_DESC')}>FAVORITE ANIME<FontAwesomeIcon icon={faCaretUp} className={styles.caretIcon} /></th> : sort==='FAVORITE_ANIME_DESC' ? <th onClick={() => setSort('FAVORITE_ANIME_ASC')}>FAVORITE ANIME<FontAwesomeIcon icon={faCaretDown} className={styles.caretIcon} /></th> : <th onClick={() => setSort('FAVORITE_ANIME_ASC')}>FAVORITE ANIME</th> }
            <th>SECTION</th>
          </tr>
        </thead>
        <tbody>
          {users}
        </tbody>
      </table>
    </div>
  );
}

export default Table;