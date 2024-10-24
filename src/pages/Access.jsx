import '../styles/Access.css'

export const Access = () => {
    return (
        <div className="access">
            <div className="access-container">
                <h2>アクセス</h2>

                <h3>
                    <span className="way-span">アストラムライン</span>
                </h3>

                <p>大塚駅下車 徒歩２５分</p>

                <h3>
                    <span className="way-span">バス</span>
                </h3>

                <p>
                    広島バスセンターより
                    <br />
                    ２番乗り場「くすの木台」
                    <br />
                    「市立大学前」下車
                    <br />
                    ４番乗り場「花の季台・こころ西風梅苑・こころ産業団地・こころ南中央」方面行き
                    <br />
                    「沼田料金所前(※)」下車 徒歩８分
                </p>
                <p>※「市立大学前」に止まる便もございます</p>
            </div>
            <div className="table">
                <h3>広島電鉄バス 臨時時刻表</h3>
                <details>
                    <summary>【行き】広島市立大学 方面</summary>

                    <p>広島バスセンターでは④番乗り場にお乗りください．<br />
                    (②)のついたバスは，②番乗り場でお乗りください．</p>
                    <table>
                        <thead>
                            <tr>
                                <th>種別</th>
                                <th>広島バスセンター</th>
                                <th>横川駅③番</th>
                                <th>沼田料金所</th>
                                <th>市立大学前</th>
                                <th>経由地・終点</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>9:08</td>
                                <td>9:18</td>
                                <td>9:31</td>
                                <td>–</td>
                                <td>こころ西風梅苑</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>9:18</td>
                                <td>9:28</td>
                                <td>9:41</td>
                                <td>–</td>
                                <td>花の季台</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>9:28</td>
                                <td>9:38</td>
                                <td>9:51</td>
                                <td>–</td>
                                <td>こころ産業団地</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>9:38</td>
                                <td>9:48</td>
                                <td>10:01</td>
                                <td>–</td>
                                <td>花の季台</td>
                            </tr>
                            <tr>
                                <th scope="col">臨時便</th>
                                <td></td>
                                <td>9:53</td>
                                <td>–</td>
                                <td>10:08</td>
                                <td>ノンストップ市立大学</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>9:48</td>
                                <td>9:58</td>
                                <td>10:11</td>
                                <td>–</td>
                                <td>こころ西風梅苑</td>
                            </tr>
                            <tr>
                                <th scope="col">臨時便</th>
                                <td></td>
                                <td>10:03</td>
                                <td>–</td>
                                <td>10:18</td>
                                <td>ノンストップ市立大学</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>9:58</td>
                                <td>10:08</td>
                                <td>–</td>
                                <td>10:23</td>
                                <td>こころ南中央</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>10:08</td>
                                <td>10:18</td>
                                <td>10:31</td>
                                <td>–</td>
                                <td>こころ西風梅苑</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>10:08(②)</td>
                                <td>–</td>
                                <td>–</td>
                                <td>10:20</td>
                                <td>くすの木台</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>10:18</td>
                                <td>10:28</td>
                                <td>10:41</td>
                                <td>–</td>
                                <td>花の季台</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>10:28</td>
                                <td>10:38</td>
                                <td>10:51</td>
                                <td>–</td>
                                <td>こころ西風梅苑</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>10:38</td>
                                <td>10:48</td>
                                <td>11:01</td>
                                <td>–</td>
                                <td>花の季台</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>10:48</td>
                                <td>10:58</td>
                                <td>11:11</td>
                                <td>–</td>
                                <td>こころ西風梅苑</td>
                            </tr>
                            <tr>
                                <th scope="col">臨時便</th>
                                <td></td>
                                <td>11:03</td>
                                <td>–</td>
                                <td>11:18</td>
                                <td>ノンストップ市立大学</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>10:58</td>
                                <td>11:08</td>
                                <td>11:21</td>
                                <td>–</td>
                                <td>こころ南中央</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>11:08</td>
                                <td>11:18</td>
                                <td>11:31</td>
                                <td>–</td>
                                <td>こころ西風梅苑</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>11:08(②)</td>
                                <td>–</td>
                                <td>–</td>
                                <td>11:20</td>
                                <td>くすのき台</td>
                            </tr>
                            <tr>
                                <th scope="col">臨時便</th>
                                <td></td>
                                <td>11:23</td>
                                <td>–</td>
                                <td>11:38</td>
                                <td>ノンストップ市立大学</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>11:18</td>
                                <td>11:28</td>
                                <td>11:41</td>
                                <td>–</td>
                                <td>花の季台</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>11:28</td>
                                <td>11:38</td>
                                <td>11:51</td>
                                <td>–</td>
                                <td>こころ産業団地</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>11:38</td>
                                <td>11:48</td>
                                <td>12:01</td>
                                <td>–</td>
                                <td>花の季台</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>11:48</td>
                                <td>11:58</td>
                                <td>12:11</td>
                                <td>–</td>
                                <td>こころ西風梅苑</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>11:58</td>
                                <td>12:08</td>
                                <td>12:21</td>
                                <td>–</td>
                                <td>こころ南中央</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>12:08</td>
                                <td>12:18</td>
                                <td>12:31</td>
                                <td>–</td>
                                <td>こころ西風梅苑</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>12:08(②)</td>
                                <td>–</td>
                                <td>–</td>
                                <td>12:20</td>
                                <td>くすの木台</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>12:18</td>
                                <td>12:28</td>
                                <td>–</td>
                                <td>12:43</td>
                                <td>花の季台</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>12:28</td>
                                <td>12:38</td>
                                <td>12:51</td>
                                <td>–</td>
                                <td>こころ西風梅苑</td>
                            </tr>
                            <tr>
                                <th scope="col">臨時便</th>
                                <td></td>
                                <td>12:43</td>
                                <td>–</td>
                                <td>12:58</td>
                                <td>ノンストップ市立大学</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>12:38</td>
                                <td>12:48</td>
                                <td>13:01</td>
                                <td>–</td>
                                <td>花の季台</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>12:48</td>
                                <td>12:58</td>
                                <td>13:11</td>
                                <td>–</td>
                                <td>こころ西風梅苑</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>12:58</td>
                                <td>13:08</td>
                                <td>13:21</td>
                                <td>–</td>
                                <td>こころ南中央</td>
                            </tr>
                            <tr>
                                <th scope="col">臨時便</th>
                                <td></td>
                                <td>13:13</td>
                                <td>–</td>
                                <td>13:28</td>
                                <td>ノンストップ市立大学</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>13:08</td>
                                <td>13:18</td>
                                <td>13:31</td>
                                <td>–</td>
                                <td>こころ西風梅苑</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>13:08(②)</td>
                                <td>–</td>
                                <td>–</td>
                                <td>13:20</td>
                                <td>くすの木台</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>13:18</td>
                                <td>13:28</td>
                                <td>13:41</td>
                                <td>–</td>
                                <td>花の季台</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>13:28</td>
                                <td>13:38</td>
                                <td>13:51</td>
                                <td>–</td>
                                <td>こころ産業団地</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>13:38</td>
                                <td>13:48</td>
                                <td>14:01</td>
                                <td>–</td>
                                <td>花の季台</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>13:48</td>
                                <td>13:58</td>
                                <td>14:11</td>
                                <td>–</td>
                                <td>こころ西風梅苑</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>13:58</td>
                                <td>14:08</td>
                                <td>–</td>
                                <td>14:23</td>
                                <td>こころ南中央</td>
                            </tr>
                        </tbody>
                    </table>
                </details>
                <details>
                    <summary>【帰り】横川駅・広島バスセンター 方面</summary>
                    <table>
                        <thead>
                            <tr>
                                <th>種別</th>
                                <th>沼田料金所</th>
                                <th>市立大学前</th>
                                <th>横川駅</th>
                                <th>広島バスセンター</th>
                                <th>経由地・終点</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="col">定期便</th>
                                <td></td>
                                <td>14:39</td>
                                <td>…</td>
                                <td>14:53</td>
                                <td>中広町・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>14:34</td>
                                <td>…</td>
                                <td>14:45</td>
                                <td>14:57</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>14:44</td>
                                <td>14:45</td>
                                <td>14:59</td>
                                <td>15:11</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>14:54</td>
                                <td>…</td>
                                <td>15:05</td>
                                <td>15:17</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">臨時便</th>
                                <td></td>
                                <td>14:55</td>
                                <td>15:09</td>
                                <td>15:21</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>15:04</td>
                                <td>…</td>
                                <td>15:15</td>
                                <td>15:27</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>15:14</td>
                                <td>…</td>
                                <td>15:25</td>
                                <td>15:37</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">臨時便</th>
                                <td></td>
                                <td>15:15</td>
                                <td>15:29</td>
                                <td>15:41</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>15:24</td>
                                <td>…</td>
                                <td>15:35</td>
                                <td>15:47</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td></td>
                                <td>15:39</td>
                                <td>…</td>
                                <td>15:53</td>
                                <td>中広町・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>15:34</td>
                                <td>…</td>
                                <td>15:45</td>
                                <td>15:57</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>15:44</td>
                                <td>…</td>
                                <td>15:55</td>
                                <td>16:07</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>15:54</td>
                                <td>…</td>
                                <td>16:05</td>
                                <td>16:17</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>16:04</td>
                                <td>…</td>
                                <td>16:15</td>
                                <td>16:27</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">臨時便</th>
                                <td></td>
                                <td>16:05</td>
                                <td>16:19</td>
                                <td>16:31</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>16:14</td>
                                <td>…</td>
                                <td>16:25</td>
                                <td>16:37</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>16:24</td>
                                <td>16:25</td>
                                <td>16:39</td>
                                <td>16:51</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td></td>
                                <td>16:39</td>
                                <td>…</td>
                                <td>16:53</td>
                                <td>中広町・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>16:34</td>
                                <td>…</td>
                                <td>16:45</td>
                                <td>16:57</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>16:44</td>
                                <td>…</td>
                                <td>16:55</td>
                                <td>17:07</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>16:54</td>
                                <td>…</td>
                                <td>17:05</td>
                                <td>17:17</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">臨時便</th>
                                <td></td>
                                <td>16:55</td>
                                <td>17:09</td>
                                <td>17:21</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>17:04</td>
                                <td>…</td>
                                <td>17:15</td>
                                <td>17:27</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>17:14</td>
                                <td>…</td>
                                <td>17:25</td>
                                <td>17:37</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>17:24</td>
                                <td>…</td>
                                <td>17:35</td>
                                <td>17:47</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td></td>
                                <td>17:39</td>
                                <td>…</td>
                                <td>17:53</td>
                                <td>中広町・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>17:34</td>
                                <td>…</td>
                                <td>17:45</td>
                                <td>17:57</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>17:44</td>
                                <td>…</td>
                                <td>17:55</td>
                                <td>18:07</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>17:54</td>
                                <td>…</td>
                                <td>18:05</td>
                                <td>18:17</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>18:04</td>
                                <td>18:05</td>
                                <td>18:19</td>
                                <td>18:31</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td></td>
                                <td>18:09</td>
                                <td>…</td>
                                <td>18:23</td>
                                <td>中広町・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>18:14</td>
                                <td>…</td>
                                <td>18:25</td>
                                <td>18:37</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>18:24</td>
                                <td>…</td>
                                <td>18:35</td>
                                <td>18:47</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">臨時便</th>
                                <td></td>
                                <td>18:25</td>
                                <td>18:39</td>
                                <td>18:51</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>18:34</td>
                                <td>…</td>
                                <td>18:45</td>
                                <td>18:57</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>18:44</td>
                                <td>…</td>
                                <td>18:55</td>
                                <td>19:07</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>18:54</td>
                                <td>…</td>
                                <td>19:05</td>
                                <td>19:17</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>19:04</td>
                                <td>…</td>
                                <td>19:15</td>
                                <td>19:27</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td></td>
                                <td>19:09</td>
                                <td>…</td>
                                <td>19:23</td>
                                <td>中広町・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>19:19</td>
                                <td>…</td>
                                <td>19:30</td>
                                <td>19:42</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                            <tr>
                                <th scope="col">定期便</th>
                                <td>19:34</td>
                                <td>…</td>
                                <td>19:45</td>
                                <td>19:57</td>
                                <td>横川駅・広島バスセンター</td>
                            </tr>
                        </tbody>
                    </table>
                </details>
                <p>
                    <a href="public\2024102627.pdf">PDFでダウンロード</a>
                </p>
            </div>
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12888.087419815736!2d132.4186049951159!3d34.43753606139676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355a9846b8b10471%3A0xb50adccc4687ad83!2z5bqD5bO25biC56uL5aSn5a2m!5e1!3m2!1sja!2sjp!4v1727829365634!5m2!1sja!2sjp"
                    className="gmap_iframe"
                    allowfullscreen=""
                ></iframe>
            </div>
        </div>
    )
}
