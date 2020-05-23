import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import { useState, SyntheticEvent } from 'react';
import Site from '../components/site';
import { isValidUrl } from '../isSiteOnline';
import { SessionStorage } from '../sessionStorage';
import { isBrowser } from '../isBrowser';

function buildSiteChecks(urls: string[]) {
  if (urls.length === 0 && isBrowser())
    urls = sessionStorage.getUrls();

  return urls.map(u => (<Site key={u} url={u} />));
}

const sessionStorage = new SessionStorage();

export default function () {
  const [inputState, setInputState] = useState('chandlerdavidson.com');
  const [sites, setSites] = useState([]);

  function handleChange(event: SyntheticEvent) {
    const target = event.target as HTMLInputElement;
    setInputState(target.value);
  }

  function handleClick() {
    const newSite = inputState;

    if (!isValidUrl(inputState))
      return;
    
    setInputState('');
    setSites([...sites, newSite]);
    sessionStorage.setUrl(newSite);
  }

  return (
    <div>
      <Head title="Hope it's not down" />
      <div className="hero">
        <h1 className="title">Hope its not down</h1>
      </div>

      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      }}>
        <input type="text" onChange={handleChange} value={inputState}/>
        <button onClick={handleClick}>+</button>
      </div>

      <ul style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
        {buildSiteChecks(sites)}
      </ul>

      <Link href="/faq">
        <p style={{
          textDecorationLine: "underline",
          color: "gray",
          position: "absolute",
          bottom: "0"
        }}>It says my site's down, but I know its not.</p>
      </Link>

      <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        padding-bottom: 12px;
        line-height: 1.15;
        font-size: 37px;
      }
      .title, .description {
        text-align: center;
      }
      .row {
        max-width: 587px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9B9B9B;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
    </div>
  )
}