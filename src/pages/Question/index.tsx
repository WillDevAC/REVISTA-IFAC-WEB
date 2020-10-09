import React, { useState, useEffect } from 'react';
import './styles.css';
import api from '../../service/api';
import { useToasts } from 'react-toast-notifications';
import { useParams } from "react-router-dom";
const Question: React.FC = () => {
    const { name, id }: any = useParams();
    const [alert, setAlert] = useState<string>('');
    const [aa, setAa] = useState<string>('');
    const [bb, setBb] = useState<string>('');
    const [cc, setCc] = useState<string>('');
    const [dd, setDd] = useState<string>('');
    const [ff, setFf] = useState<string>('');
    const [gg, setGg] = useState<string>('');
    const [hh, setHh] = useState<string>('');
    const [ii, setIi] = useState<string>('');
    const [jj, setJj] = useState<string>('');
    const [kk, setKk] = useState<string>('');
    const [ll, setLl] = useState<string>('');
    const [mm, setMm] = useState<string>('');
    const [nn, setNn] = useState<string>('');
    const [oo, setOo] = useState<string>('');
    const [desc, setDesc] = useState('');
    const { addToast } = useToasts();
    const Logo = require('../../assets/ifac.png');

    useEffect(() => {
        api.get(`/exist/docume/${id}/not`).then(res => {
            addToast(`${res.data.res}`, {
                appearance: 'info',
                autoDismiss: true,
            })
            if(res.data.message === 'exist'){
                setAlert(res.data.res2);
                return addToast(`${res.data.res2}`, {
                    appearance: 'info',
                })
            }
            
        })
    }, [])


    const onSubmit = () => {

        if ((aa.length === 0) || (bb.length === 0) || (cc.length === 0) || (dd.length === 0) || (ff.length === 0) || (gg.length === 0) || (hh.length === 0) || (ii.length === 0) || (jj.length === 0) || (kk.length === 0) || (ll.length === 0) || (mm.length === 0) || (nn.length === 0) || (oo.length === 0)) {
            return addToast(`Avalie todos os campos`, {
                appearance: 'error',
                autoDismiss: true,
            })
        }

        api.post('/docum/create', {
            docID: id,
            a: `${aa},${bb},${cc},${dd}`,
            b: `${ff},${gg},${hh},${ii}`,
            c: `${jj},${kk},${ll},${mm},${nn}`,
            d: oo,
            desc
        }).then(res => {
            if (res.data.message === 'success') {
                api.get(`/aceita/${id}`).then(res => {
                    if (res.data.message === 'success') {
                        return addToast(`Formulário enviado!`, {
                            appearance: 'success',
                            autoDismiss: true,
                        })
                    } else {
                        return addToast(`Ocorreu um erro ao enviar Formulário!`, {
                            appearance: 'error',
                            autoDismiss: true,
                        })
                    }
                })
            } else {
                return addToast(`Ocorreu um erro ao enviar Formulário!`, {
                    appearance: 'error',
                    autoDismiss: true,
                })
            }
        }).catch(() => {
            return addToast(`Ocorreu um erro ao enviar Formulário!`, {
                appearance: 'error',
                autoDismiss: true,
            })
        })
    }

    return (
        <>
            <div className="App">
                <div className="viewContainerQuestionnss">
                    <div className="centersssfrv">
                        <img src={Logo} alt="Ifac" />
                        <h2 className='h2spacinfagr'>Formulário de Avaliação de Artigos</h2>

                        <div className='rowss'>
                            <label htmlFor="lname"> Titulo do Trabalho:</label>
                            <input className={'inpstshome'} value={name} disabled type="text" id="lname" name="lname" />
                        </div>
                        <table id="customers2">
                            <thead>
                                <tr>
                                    <th>Critérios Linguísticos e Formais</th>
                                    <th>Pontuação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Qualidade da escrita, organização e apresentação do texto</td>
                                    <td className='fsrgtashj'>
                                        <div onClick={() => setAa('1')} className={aa === '1' ? 'divavalafgvrAA' : 'divavalafgvr'}>1</div>
                                        <div onClick={() => setAa('2')} className={aa === '2' ? 'divavalafgvrAA' : 'divavalafgvr'}>2</div>
                                        <div onClick={() => setAa('3')} className={aa === '3' ? 'divavalafgvrAA' : 'divavalafgvr'}>3</div>
                                        <div onClick={() => setAa('4')} className={aa === '4' ? 'divavalafgvrAA' : 'divavalafgvr'}>4</div>
                                        <div onClick={() => setAa('5')} className={aa === '5' ? 'divavalafgvrAA' : 'divavalafgvr'}>5</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Objetividade e clareza</td>
                                    <td className='fsrgtashj'>
                                        <div onClick={() => setBb('1')} className={bb === '1' ? 'divavalafgvrAA' : 'divavalafgvr'}>1</div>
                                        <div onClick={() => setBb('2')} className={bb === '2' ? 'divavalafgvrAA' : 'divavalafgvr'}>2</div>
                                        <div onClick={() => setBb('3')} className={bb === '3' ? 'divavalafgvrAA' : 'divavalafgvr'}>3</div>
                                        <div onClick={() => setBb('4')} className={bb === '4' ? 'divavalafgvrAA' : 'divavalafgvr'}>4</div>
                                        <div onClick={() => setBb('5')} className={bb === '5' ? 'divavalafgvrAA' : 'divavalafgvr'}>5</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Distribuição lógica das seções dos trabalhos</td>
                                    <td className='fsrgtashj'>
                                        <div onClick={() => setCc('1')} className={cc === '1' ? 'divavalafgvrAA' : 'divavalafgvr'}>1</div>
                                        <div onClick={() => setCc('2')} className={cc === '2' ? 'divavalafgvrAA' : 'divavalafgvr'}>2</div>
                                        <div onClick={() => setCc('3')} className={cc === '3' ? 'divavalafgvrAA' : 'divavalafgvr'}>3</div>
                                        <div onClick={() => setCc('4')} className={cc === '4' ? 'divavalafgvrAA' : 'divavalafgvr'}>4</div>
                                        <div onClick={() => setCc('5')} className={cc === '5' ? 'divavalafgvrAA' : 'divavalafgvr'}>5</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Adequação e qualidade das ilustrações</td>
                                    <td className='fsrgtashj'>
                                        <div onClick={() => setDd('1')} className={dd === '1' ? 'divavalafgvrAA' : 'divavalafgvr'} >1</div>
                                        <div onClick={() => setDd('2')} className={dd === '2' ? 'divavalafgvrAA' : 'divavalafgvr'} >2</div>
                                        <div onClick={() => setDd('3')} className={dd === '3' ? 'divavalafgvrAA' : 'divavalafgvr'} >3</div>
                                        <div onClick={() => setDd('4')} className={dd === '4' ? 'divavalafgvrAA' : 'divavalafgvr'} >4</div>
                                        <div onClick={() => setDd('5')} className={dd === '5' ? 'divavalafgvrAA' : 'divavalafgvr'} >5</div>
                                    </td>
                                </tr>
                            </tbody>
                            <h2 className='h2spacinfagr' />
                            <thead>
                                <tr>
                                    <th>Critérios Metodológicos</th>
                                    <th>Pontuação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Possui fundamentação teórica </td>
                                    <td className='fsrgtashj'>
                                        <div onClick={() => setFf('1')} className={ff === '1' ? 'divavalafgvrAA' : 'divavalafgvr'} >1</div>
                                        <div onClick={() => setFf('2')} className={ff === '2' ? 'divavalafgvrAA' : 'divavalafgvr'} >2</div>
                                        <div onClick={() => setFf('3')} className={ff === '3' ? 'divavalafgvrAA' : 'divavalafgvr'} >3</div>
                                        <div onClick={() => setFf('4')} className={ff === '4' ? 'divavalafgvrAA' : 'divavalafgvr'} >4</div>
                                        <div onClick={() => setFf('5')} className={ff === '5' ? 'divavalafgvrAA' : 'divavalafgvr'} >5</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Rigor científico e metodológico (articulação entre problema, objetivos e resultados</td>
                                    <td className='fsrgtashj'>
                                        <div onClick={() => setGg('1')} className={gg === '1' ? 'divavalafgvrAA' : 'divavalafgvr'} >1</div>
                                        <div onClick={() => setGg('2')} className={gg === '2' ? 'divavalafgvrAA' : 'divavalafgvr'} >2</div>
                                        <div onClick={() => setGg('3')} className={gg === '3' ? 'divavalafgvrAA' : 'divavalafgvr'} >3</div>
                                        <div onClick={() => setGg('4')} className={gg === '4' ? 'divavalafgvrAA' : 'divavalafgvr'} >4</div>
                                        <div onClick={() => setGg('5')} className={gg === '5' ? 'divavalafgvrAA' : 'divavalafgvr'} >5</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>A metodologia foi adequada na análise dos resultados</td>
                                    <td className='fsrgtashj'>
                                        <div onClick={() => setHh('1')} className={hh === '1' ? 'divavalafgvrAA' : 'divavalafgvr'} >1</div>
                                        <div onClick={() => setHh('2')} className={hh === '2' ? 'divavalafgvrAA' : 'divavalafgvr'} >2</div>
                                        <div onClick={() => setHh('3')} className={hh === '3' ? 'divavalafgvrAA' : 'divavalafgvr'} >3</div>
                                        <div onClick={() => setHh('4')} className={hh === '4' ? 'divavalafgvrAA' : 'divavalafgvr'} >4</div>
                                        <div onClick={() => setHh('5')} className={hh === '5' ? 'divavalafgvrAA' : 'divavalafgvr'} >5</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>referência a trabalhos similares</td>
                                    <td className='fsrgtashj'>
                                        <div onClick={() => setIi('1')} className={ii === '1' ? 'divavalafgvrAA' : 'divavalafgvr'} >1</div>
                                        <div onClick={() => setIi('2')} className={ii === '2' ? 'divavalafgvrAA' : 'divavalafgvr'} >2</div>
                                        <div onClick={() => setIi('3')} className={ii === '3' ? 'divavalafgvrAA' : 'divavalafgvr'} >3</div>
                                        <div onClick={() => setIi('4')} className={ii === '4' ? 'divavalafgvrAA' : 'divavalafgvr'} >4</div>
                                        <div onClick={() => setIi('5')} className={ii === '5' ? 'divavalafgvrAA' : 'divavalafgvr'} >5</div>
                                    </td>
                                </tr>
                            </tbody>

                            <h2 className='h2spacinfagr' />


                            <thead>
                                <tr>
                                    <th>Critérios Específicos da área</th>
                                    <th>Pontuação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>adequação do titulo</td>
                                    <td className='fsrgtashj'>
                                        <div onClick={() => setJj('1')} className={jj === '1' ? 'divavalafgvrAA' : 'divavalafgvr'} >1</div>
                                        <div onClick={() => setJj('2')} className={jj === '2' ? 'divavalafgvrAA' : 'divavalafgvr'} >2</div>
                                        <div onClick={() => setJj('3')} className={jj === '3' ? 'divavalafgvrAA' : 'divavalafgvr'} >3</div>
                                        <div onClick={() => setJj('4')} className={jj === '4' ? 'divavalafgvrAA' : 'divavalafgvr'} >4</div>
                                        <div onClick={() => setJj('5')} className={jj === '5' ? 'divavalafgvrAA' : 'divavalafgvr'} >5</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Originalidade do tema </td>
                                    <td className='fsrgtashj'>
                                        <div onClick={() => setKk('1')} className={kk === '1' ? 'divavalafgvrAA' : 'divavalafgvr'} >1</div>
                                        <div onClick={() => setKk('2')} className={kk === '2' ? 'divavalafgvrAA' : 'divavalafgvr'} >2</div>
                                        <div onClick={() => setKk('3')} className={kk === '3' ? 'divavalafgvrAA' : 'divavalafgvr'} >3</div>
                                        <div onClick={() => setKk('4')} className={kk === '4' ? 'divavalafgvrAA' : 'divavalafgvr'} >4</div>
                                        <div onClick={() => setKk('5')} className={kk === '5' ? 'divavalafgvrAA' : 'divavalafgvr'} >5</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Fomulação do problema de pesquisa</td>
                                    <td className='fsrgtashj'>
                                        <div onClick={() => setLl('1')} className={ll === '1' ? 'divavalafgvrAA' : 'divavalafgvr'} >1</div>
                                        <div onClick={() => setLl('2')} className={ll === '2' ? 'divavalafgvrAA' : 'divavalafgvr'} >2</div>
                                        <div onClick={() => setLl('3')} className={ll === '3' ? 'divavalafgvrAA' : 'divavalafgvr'} >3</div>
                                        <div onClick={() => setLl('4')} className={ll === '4' ? 'divavalafgvrAA' : 'divavalafgvr'} >4</div>
                                        <div onClick={() => setLl('5')} className={ll === '5' ? 'divavalafgvrAA' : 'divavalafgvr'} >5</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Relevância para o desenvolvimento do conhecimento científico, tecnológico, social e cultural</td>
                                    <td className='fsrgtashj'>
                                        <div onClick={() => setMm('1')} className={mm === '1' ? 'divavalafgvrAA' : 'divavalafgvr'} >1</div>
                                        <div onClick={() => setMm('2')} className={mm === '2' ? 'divavalafgvrAA' : 'divavalafgvr'} >2</div>
                                        <div onClick={() => setMm('3')} className={mm === '3' ? 'divavalafgvrAA' : 'divavalafgvr'} >3</div>
                                        <div onClick={() => setMm('4')} className={mm === '4' ? 'divavalafgvrAA' : 'divavalafgvr'} >4</div>
                                        <div onClick={() => setMm('5')} className={mm === '5' ? 'divavalafgvrAA' : 'divavalafgvr'} >5</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Resultados satisfatórios</td>
                                    <td className='fsrgtashj'>
                                        <div onClick={() => setNn('1')} className={nn === '1' ? 'divavalafgvrAA' : 'divavalafgvr'} >1</div>
                                        <div onClick={() => setNn('2')} className={nn === '2' ? 'divavalafgvrAA' : 'divavalafgvr'} >2</div>
                                        <div onClick={() => setNn('3')} className={nn === '3' ? 'divavalafgvrAA' : 'divavalafgvr'} >3</div>
                                        <div onClick={() => setNn('4')} className={nn === '4' ? 'divavalafgvrAA' : 'divavalafgvr'} >4</div>
                                        <div onClick={() => setNn('5')} className={nn === '5' ? 'divavalafgvrAA' : 'divavalafgvr'} >5</div>
                                    </td>
                                </tr>
                            </tbody>
                            <h2 className='h2spacinfagr' />
                        </table>
                        <table id="customers2">
                            <tbody>
                                <td className='vniasyuvbapjcpeoi' onClick={() => setOo('0')}>({oo === '0' ? 'X' : '  '}) Não Recomendada</td>
                                <td className='vniasyuvbapjcpeoi' onClick={() => setOo('1')}>({oo === '1' ? 'X' : '  '}) Recomendada</td>
                                <td className='vniasyuvbapjcpeoi' onClick={() => setOo('2')}>({oo === '2' ? 'X' : '  '}) Recomendada com restrições</td>
                            </tbody>
                        </table>

                        <h2 className='h2spacinfagr' />
                        <table id="customers2">
                            <tbody>
                                <td className='avnbisurgoa'>Total</td>
                                <td>{Number(Number(aa) + Number(bb) + Number(cc) + Number(dd) + Number(Number(ff) * 2) + Number(gg) + Number(hh) + Number(Number(ii) * 2) + Number(Number(jj) * 2) + Number(Number(kk) * 2) + Number(Number(ll) * 2) + Number(Number(mm) * 2) + Number(Number(nn) * 2))}</td>
                            </tbody>
                        </table>

                        <h2 className='h2spacinfagr' />

                        <div className='asvnoarivfhcor0tjpew'>
                            <label > Comentários adicionais</label>
                            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} className='bcuoahsvoyuvvtasbp' name="" id="" placeholder={'Utilize este espaço para fazer comentários de melhoria do artigo, apontando os pontos fortes e que necessitam de atenção.'} />
                        </div>
                        <div className="vniuasrbvisbrv">
                                    <h5>{alert}</h5>
                        </div>

                        <strong onClick={onSubmit}>
                            SUBMETER AVALIAÇÃO
                            </strong>

                        <div className="vniuasrbvisbrv"></div>


                    </div>

                </div>
            </div>
        </>
    )
}
export default Question;
