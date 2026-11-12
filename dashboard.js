const indicators=[
['sales','Penjualan tenaga listrik','GWh','up',86,0],
['loss','Susut distribusi','%', 'down',7.5,0],
['saidi','SAIDI','menit/pelanggan','down',42,1],
['saifi','SAIFI','kali/pelanggan','down',1.1,1],
['ens','ENS','MWh','down',58,1],
['feeder','Gangguan penyulang','kali','down',24,2],
['transformer','Gangguan trafo','kali','down',7,2],
['cubicle','Gangguan kubikel','kali','down',3,2],
['tm','Recovery gangguan TM','menit','down',85,2],
['response','Response time pelanggan','menit','down',25,3],
['recovery','Recovery time pelanggan','menit','down',95,3],
['carry','Investasi luncuran','%','up',80,4],
['pure','Investasi murni','%','up',72,4],
['operation','Anggaran operasi','%','up',79,4],
['recloser','Gangguan / kerusakan recloser','kali','down',10,2],
['lbs','Gangguan / kerusakan LBS','kali','down',8,2],
['negative','Rating negatif pelanggan','ulasan','down',32,3],
['yantek_wo','Yantek Optimization · WO selesai','WO','up',7475,5],
['yantek_sla','Yantek Optimization · SLA kualitas','%','up',100,5]
];
const units=['UP3 Jayapura','ULP Jayapura','ULP Abepura','ULP Sentani','ULP Arso','ULP Genyem','ULP Sarmi'];
const groups=['Semua indikator','Energi & susut','Keandalan','Gangguan aset & TM','Layanan pelanggan','Anggaran','Yantek Optimization'];
const notesFields=[['analysis','Catatan analisis'],['evaluation','Evaluasi'],['action','Rencana aksi / mitigasi'],['owner','PIC'],['deadline','Tenggat'],['status','Status tindak lanjut']];
const workbookRecords={"2026-01|UP3 Jayapura|sales":{"target":53.65462,"actual":56.65509},"2026-01|UP3 Jayapura|loss":{"target":10.35,"actual":10.678004934612893},"2026-01|UP3 Jayapura|saidi":{"target":25.3166666666667,"actual":14.93},"2026-01|UP3 Jayapura|saifi":{"target":0.326666666666667,"actual":0.17},"2026-01|UP3 Jayapura|ens":{"target":39.0786,"actual":13.488},"2026-01|UP3 Jayapura|negative":{"target":2,"actual":0},"2026-01|UP3 Jayapura|response":{"target":30,"actual":null},"2026-02|UP3 Jayapura|sales":{"target":105.6865,"actual":108.41868},"2026-02|UP3 Jayapura|loss":{"target":10.31,"actual":9.88713642429333},"2026-02|UP3 Jayapura|saidi":{"target":50.6333333333333,"actual":29.4},"2026-02|UP3 Jayapura|saifi":{"target":0.653333333333333,"actual":0.28},"2026-02|UP3 Jayapura|ens":{"target":78.1572,"actual":37.488},"2026-02|UP3 Jayapura|negative":{"target":4,"actual":3},"2026-02|UP3 Jayapura|response":{"target":30,"actual":29.06},"2026-03|UP3 Jayapura|sales":{"target":157.48692,"actual":163.55927},"2026-03|UP3 Jayapura|loss":{"target":10.26,"actual":9.946825577320553},"2026-03|UP3 Jayapura|saidi":{"target":75.95,"actual":42.13},"2026-03|UP3 Jayapura|saifi":{"target":0.98,"actual":0.4},"2026-03|UP3 Jayapura|ens":{"target":117.2358,"actual":54.28},"2026-03|UP3 Jayapura|negative":{"target":6,"actual":4},"2026-03|UP3 Jayapura|response":{"target":30,"actual":27.42},"2026-04|UP3 Jayapura|sales":{"target":217.74756,"actual":218.64385},"2026-04|UP3 Jayapura|loss":{"target":10.23,"actual":10.00301359260466},"2026-04|UP3 Jayapura|saidi":{"target":101.266666666667,"actual":58.66},"2026-04|UP3 Jayapura|saifi":{"target":1.30666666666667,"actual":0.5},"2026-04|UP3 Jayapura|ens":{"target":156.3144,"actual":70.61},"2026-04|UP3 Jayapura|negative":{"target":6,"actual":9},"2026-04|UP3 Jayapura|response":{"target":30,"actual":27.35},"2026-05|UP3 Jayapura|sales":{"target":274.22828,"actual":277.68},"2026-05|UP3 Jayapura|loss":{"target":10.2,"actual":9.865813185886983},"2026-05|UP3 Jayapura|saidi":{"target":126.583333333333,"actual":86.42},"2026-05|UP3 Jayapura|saifi":{"target":1.63333333333333,"actual":0.72},"2026-05|UP3 Jayapura|ens":{"target":195.393,"actual":103.23},"2026-05|UP3 Jayapura|negative":{"target":7,"actual":9},"2026-05|UP3 Jayapura|response":{"target":30,"actual":27.01},"2026-06|UP3 Jayapura|sales":{"target":330.67305,"actual":334.82},"2026-06|UP3 Jayapura|loss":{"target":10.16,"actual":null},"2026-06|UP3 Jayapura|saidi":{"target":151.9,"actual":119.22},"2026-06|UP3 Jayapura|saifi":{"target":1.96,"actual":0.9199999999999999},"2026-06|UP3 Jayapura|ens":{"target":234.4716,"actual":148.23000000000002},"2026-06|UP3 Jayapura|negative":{"target":7,"actual":10},"2026-06|UP3 Jayapura|response":{"target":30,"actual":24.31},"2026-07|UP3 Jayapura|sales":{"target":385.90759,"actual":null},"2026-07|UP3 Jayapura|loss":{"target":10.13,"actual":null},"2026-07|UP3 Jayapura|saidi":{"target":177.216666666667,"actual":null},"2026-07|UP3 Jayapura|saifi":{"target":2.28666666666667,"actual":null},"2026-07|UP3 Jayapura|ens":{"target":273.5502,"actual":null},"2026-07|UP3 Jayapura|negative":{"target":11,"actual":null},"2026-07|UP3 Jayapura|response":{"target":30,"actual":null},"2026-08|UP3 Jayapura|sales":{"target":444.04205,"actual":null},"2026-08|UP3 Jayapura|loss":{"target":10.09,"actual":null},"2026-08|UP3 Jayapura|saidi":{"target":202.533333333333,"actual":null},"2026-08|UP3 Jayapura|saifi":{"target":2.61333333333333,"actual":null},"2026-08|UP3 Jayapura|ens":{"target":312.6288,"actual":null},"2026-08|UP3 Jayapura|negative":{"target":12,"actual":null},"2026-08|UP3 Jayapura|response":{"target":30,"actual":null},"2026-09|UP3 Jayapura|sales":{"target":502.25945,"actual":null},"2026-09|UP3 Jayapura|loss":{"target":10.06,"actual":null},"2026-09|UP3 Jayapura|saidi":{"target":227.85,"actual":null},"2026-09|UP3 Jayapura|saifi":{"target":2.94,"actual":null},"2026-09|UP3 Jayapura|ens":{"target":351.7074,"actual":null},"2026-09|UP3 Jayapura|negative":{"target":12,"actual":null},"2026-09|UP3 Jayapura|response":{"target":30,"actual":null},"2026-10|UP3 Jayapura|sales":{"target":561.27877,"actual":null},"2026-10|UP3 Jayapura|loss":{"target":10.03,"actual":null},"2026-10|UP3 Jayapura|saidi":{"target":253.166666666667,"actual":null},"2026-10|UP3 Jayapura|saifi":{"target":3.26666666666667,"actual":null},"2026-10|UP3 Jayapura|ens":{"target":390.786,"actual":null},"2026-10|UP3 Jayapura|negative":{"target":12,"actual":null},"2026-10|UP3 Jayapura|response":{"target":30,"actual":null},"2026-11|UP3 Jayapura|sales":{"target":619.76097,"actual":null},"2026-11|UP3 Jayapura|loss":{"target":10.01,"actual":null},"2026-11|UP3 Jayapura|saidi":{"target":278.483333333333,"actual":null},"2026-11|UP3 Jayapura|saifi":{"target":3.59333333333333,"actual":null},"2026-11|UP3 Jayapura|ens":{"target":429.8646,"actual":null},"2026-11|UP3 Jayapura|negative":{"target":13,"actual":null},"2026-11|UP3 Jayapura|response":{"target":30,"actual":null},"2026-12|UP3 Jayapura|sales":{"target":679.40441,"actual":null},"2026-12|UP3 Jayapura|loss":{"target":9.98,"actual":null},"2026-12|UP3 Jayapura|saidi":{"target":303.8,"actual":null},"2026-12|UP3 Jayapura|saifi":{"target":3.92,"actual":null},"2026-12|UP3 Jayapura|ens":{"target":468.9432,"actual":null},"2026-12|UP3 Jayapura|negative":{"target":13,"actual":null},"2026-12|UP3 Jayapura|response":{"target":30,"actual":null},"2026-01|ULP Jayapura|sales":{"target":17.2092562094,"actual":17.60738},"2026-01|ULP Jayapura|loss":{"target":9.49358399451298,"actual":9.624048361929823},"2026-01|ULP Jayapura|saidi":{"target":27.25,"actual":43.377},"2026-01|ULP Jayapura|saifi":{"target":0.4,"actual":0.38},"2026-01|ULP Jayapura|ens":{"target":11.72,"actual":5.771},"2026-01|ULP Jayapura|negative":{"target":1,"actual":0},"2026-01|ULP Jayapura|response":{"target":30,"actual":null},"2026-02|ULP Jayapura|sales":{"target":33.7987802193,"actual":33.83529},"2026-02|ULP Jayapura|loss":{"target":9.45131175871691,"actual":8.266187040745189},"2026-02|ULP Jayapura|saidi":{"target":54.51,"actual":75.3},"2026-02|ULP Jayapura|saifi":{"target":0.8,"actual":0.597},"2026-02|ULP Jayapura|ens":{"target":23.45,"actual":15.298},"2026-02|ULP Jayapura|negative":{"target":1,"actual":0},"2026-02|ULP Jayapura|response":{"target":30,"actual":32.72},"2026-03|ULP Jayapura|sales":{"target":50.4692632675,"actual":50.48356},"2026-03|ULP Jayapura|loss":{"target":9.3998702626301,"actual":8.76329695930992},"2026-03|ULP Jayapura|saidi":{"target":81.76,"actual":94.12},"2026-03|ULP Jayapura|saifi":{"target":1.2,"actual":0.75},"2026-03|ULP Jayapura|ens":{"target":35.17,"actual":20.93},"2026-03|ULP Jayapura|negative":{"target":2,"actual":1},"2026-03|ULP Jayapura|response":{"target":30,"actual":31.68},"2026-04|ULP Jayapura|sales":{"target":69.5610013439,"actual":67.25804},"2026-04|ULP Jayapura|loss":{"target":9.36843261440425,"actual":9.227163128927536},"2026-04|ULP Jayapura|saidi":{"target":109.01,"actual":114.66},"2026-04|ULP Jayapura|saifi":{"target":1.6,"actual":0.94},"2026-04|ULP Jayapura|ens":{"target":46.89,"actual":25.61},"2026-04|ULP Jayapura|negative":{"target":2,"actual":3},"2026-04|ULP Jayapura|response":{"target":30,"actual":31.49},"2026-05|ULP Jayapura|sales":{"target":87.8169131544,"actual":85.63},"2026-05|ULP Jayapura|loss":{"target":9.33710578442589,"actual":8.816148349154998},"2026-05|ULP Jayapura|saidi":{"target":136.27,"actual":142.459},"2026-05|ULP Jayapura|saifi":{"target":2,"actual":1.176},"2026-05|ULP Jayapura|ens":{"target":58.62,"actual":31.086},"2026-05|ULP Jayapura|negative":{"target":2,"actual":3},"2026-05|ULP Jayapura|response":{"target":30,"actual":30.81},"2026-06|ULP Jayapura|sales":{"target":105.6927256298,"actual":103.45},"2026-06|ULP Jayapura|loss":{"target":9.29563401220276,"actual":null},"2026-06|ULP Jayapura|saidi":{"target":163.52,"actual":null},"2026-06|ULP Jayapura|saifi":{"target":2.39,"actual":null},"2026-06|ULP Jayapura|ens":{"target":70.34,"actual":null},"2026-06|ULP Jayapura|negative":{"target":2,"actual":3},"2026-06|ULP Jayapura|response":{"target":30,"actual":26.43},"2026-07|ULP Jayapura|sales":{"target":123.7296589184,"actual":null},"2026-07|ULP Jayapura|loss":{"target":9.26446002709693,"actual":null},"2026-07|ULP Jayapura|saidi":{"target":190.77,"actual":null},"2026-07|ULP Jayapura|saifi":{"target":2.79,"actual":null},"2026-07|ULP Jayapura|ens":{"target":82.07,"actual":null},"2026-07|ULP Jayapura|negative":{"target":3,"actual":null},"2026-07|ULP Jayapura|response":{"target":30,"actual":null},"2026-08|ULP Jayapura|sales":{"target":142.3107547034,"actual":null},"2026-08|ULP Jayapura|loss":{"target":9.22318943419027,"actual":null},"2026-08|ULP Jayapura|saidi":{"target":218.02,"actual":null},"2026-08|ULP Jayapura|saifi":{"target":3.19,"actual":null},"2026-08|ULP Jayapura|ens":{"target":93.79,"actual":null},"2026-08|ULP Jayapura|negative":{"target":3,"actual":null},"2026-08|ULP Jayapura|response":{"target":30,"actual":null},"2026-09|ULP Jayapura|sales":{"target":160.868654463,"actual":null},"2026-09|ULP Jayapura|loss":{"target":9.19193102844693,"actual":null},"2026-09|ULP Jayapura|saidi":{"target":245.28,"actual":null},"2026-09|ULP Jayapura|saifi":{"target":3.59,"actual":null},"2026-09|ULP Jayapura|ens":{"target":105.51,"actual":null},"2026-09|ULP Jayapura|negative":{"target":3,"actual":null},"2026-09|ULP Jayapura|response":{"target":30,"actual":null},"2026-10|ULP Jayapura|sales":{"target":179.7214043499,"actual":null},"2026-10|ULP Jayapura|loss":{"target":9.1607398858052,"actual":null},"2026-10|ULP Jayapura|saidi":{"target":272.53,"actual":null},"2026-10|ULP Jayapura|saifi":{"target":3.99,"actual":null},"2026-10|ULP Jayapura|ens":{"target":117.24,"actual":null},"2026-10|ULP Jayapura|negative":{"target":3,"actual":null},"2026-10|ULP Jayapura|response":{"target":30,"actual":null},"2026-11|ULP Jayapura|sales":{"target":198.4494099299,"actual":null},"2026-11|ULP Jayapura|loss":{"target":9.13957403292913,"actual":null},"2026-11|ULP Jayapura|saidi":{"target":299.78,"actual":null},"2026-11|ULP Jayapura|saifi":{"target":4.39,"actual":null},"2026-11|ULP Jayapura|ens":{"target":128.96,"actual":null},"2026-11|ULP Jayapura|negative":{"target":3,"actual":null},"2026-11|ULP Jayapura|response":{"target":30,"actual":null},"2026-12|ULP Jayapura|sales":{"target":217.3684120728,"actual":null},"2026-12|ULP Jayapura|loss":{"target":9.10837567106984,"actual":null},"2026-12|ULP Jayapura|saidi":{"target":327.04,"actual":null},"2026-12|ULP Jayapura|saifi":{"target":4.79,"actual":null},"2026-12|ULP Jayapura|ens":{"target":140.68,"actual":null},"2026-12|ULP Jayapura|negative":{"target":3,"actual":null},"2026-12|ULP Jayapura|response":{"target":30,"actual":null},"2026-01|ULP Abepura|sales":{"target":20.2501242222,"actual":21.70482},"2026-01|ULP Abepura|loss":{"target":9.53466297331218,"actual":9.73675013128721},"2026-01|ULP Abepura|saidi":{"target":33.16,"actual":6.43},"2026-01|ULP Abepura|saifi":{"target":0.4,"actual":0.095},"2026-01|ULP Abepura|ens":{"target":16.8,"actual":3.387},"2026-01|ULP Abepura|negative":{"target":1,"actual":0},"2026-01|ULP Abepura|response":{"target":30,"actual":null},"2026-02|ULP Abepura|sales":{"target":40.2351268092,"actual":41.59714},"2026-02|ULP Abepura|loss":{"target":9.49719524965456,"actual":9.16987921104768},"2026-02|ULP Abepura|saidi":{"target":66.32,"actual":21.299999999999997},"2026-02|ULP Abepura|saifi":{"target":0.81,"actual":0.225},"2026-02|ULP Abepura|ens":{"target":33.61,"actual":12.363},"2026-02|ULP Abepura|negative":{"target":1,"actual":0},"2026-02|ULP Abepura|response":{"target":30,"actual":32.03},"2026-03|ULP Abepura|sales":{"target":59.8185226289,"actual":62.90925},"2026-03|ULP Abepura|loss":{"target":9.45201335558459,"actual":9.202088810176985},"2026-03|ULP Abepura|saidi":{"target":99.48,"actual":38.7521},"2026-03|ULP Abepura|saifi":{"target":1.21,"actual":0.418},"2026-03|ULP Abepura|ens":{"target":50.41,"actual":21.89},"2026-03|ULP Abepura|negative":{"target":1,"actual":0},"2026-03|ULP Abepura|response":{"target":30,"actual":28.64},"2026-04|ULP Abepura|sales":{"target":82.6662290943,"actual":84.71336},"2026-04|ULP Abepura|loss":{"target":9.4241370516213,"actual":9.160275022321356},"2026-04|ULP Abepura|saidi":{"target":132.63,"actual":54.79},"2026-04|ULP Abepura|saifi":{"target":1.61,"actual":0.519},"2026-04|ULP Abepura|ens":{"target":67.22,"actual":27.6},"2026-04|ULP Abepura|negative":{"target":2,"actual":2},"2026-04|ULP Abepura|response":{"target":30,"actual":29.78},"2026-05|ULP Abepura|sales":{"target":103.9860700461,"actual":108.17},"2026-05|ULP Abepura|loss":{"target":9.39639697982713,"actual":9.117553152354867},"2026-05|ULP Abepura|saidi":{"target":165.79,"actual":83.53},"2026-05|ULP Abepura|saifi":{"target":2.01,"actual":0.69},"2026-05|ULP Abepura|ens":{"target":84.02,"actual":45.208},"2026-05|ULP Abepura|negative":{"target":2,"actual":2},"2026-05|ULP Abepura|response":{"target":30,"actual":29.1},"2026-06|ULP Abepura|sales":{"target":126.0885897819,"actual":130.42},"2026-06|ULP Abepura|loss":{"target":9.35982024525729,"actual":null},"2026-06|ULP Abepura|saidi":{"target":198.95,"actual":null},"2026-06|ULP Abepura|saifi":{"target":2.42,"actual":null},"2026-06|ULP Abepura|ens":{"target":100.82,"actual":null},"2026-06|ULP Abepura|negative":{"target":2,"actual":3},"2026-06|ULP Abepura|response":{"target":30,"actual":27.65},"2026-07|ULP Abepura|sales":{"target":146.5575222934,"actual":null},"2026-07|ULP Abepura|loss":{"target":9.33230064598335,"actual":null},"2026-07|ULP Abepura|saidi":{"target":232.11,"actual":null},"2026-07|ULP Abepura|saifi":{"target":2.82,"actual":null},"2026-07|ULP Abepura|ens":{"target":117.63,"actual":null},"2026-07|ULP Abepura|negative":{"target":3,"actual":null},"2026-07|ULP Abepura|response":{"target":30,"actual":null},"2026-08|ULP Abepura|sales":{"target":168.7923744234,"actual":null},"2026-08|ULP Abepura|loss":{"target":9.29600856822412,"actual":null},"2026-08|ULP Abepura|saidi":{"target":265.27,"actual":null},"2026-08|ULP Abepura|saifi":{"target":3.22,"actual":null},"2026-08|ULP Abepura|ens":{"target":134.43,"actual":null},"2026-08|ULP Abepura|negative":{"target":3,"actual":null},"2026-08|ULP Abepura|response":{"target":30,"actual":null},"2026-09|ULP Abepura|sales":{"target":190.9574977316,"actual":null},"2026-09|ULP Abepura|loss":{"target":9.26836890201422,"actual":null},"2026-09|ULP Abepura|saidi":{"target":298.43,"actual":null},"2026-09|ULP Abepura|saifi":{"target":3.62,"actual":null},"2026-09|ULP Abepura|ens":{"target":151.23,"actual":null},"2026-09|ULP Abepura|negative":{"target":3,"actual":null},"2026-09|ULP Abepura|response":{"target":30,"actual":null},"2026-10|ULP Abepura|sales":{"target":213.1772851487,"actual":null},"2026-10|ULP Abepura|loss":{"target":9.24081884622255,"actual":null},"2026-10|ULP Abepura|saidi":{"target":331.59,"actual":null},"2026-10|ULP Abepura|saifi":{"target":4.03,"actual":null},"2026-10|ULP Abepura|ens":{"target":168.04,"actual":null},"2026-10|ULP Abepura|negative":{"target":4,"actual":null},"2026-10|ULP Abepura|response":{"target":30,"actual":null},"2026-11|ULP Abepura|sales":{"target":235.5957119957,"actual":null},"2026-11|ULP Abepura|loss":{"target":9.22193611349611,"actual":null},"2026-11|ULP Abepura|saidi":{"target":364.75,"actual":null},"2026-11|ULP Abepura|saifi":{"target":4.43,"actual":null},"2026-11|ULP Abepura|ens":{"target":184.84,"actual":null},"2026-11|ULP Abepura|negative":{"target":4,"actual":null},"2026-11|ULP Abepura|response":{"target":30,"actual":null},"2026-12|ULP Abepura|sales":{"target":258.5870023395,"actual":null},"2026-12|ULP Abepura|loss":{"target":9.19437434075141,"actual":null},"2026-12|ULP Abepura|saidi":{"target":397.9,"actual":null},"2026-12|ULP Abepura|saifi":{"target":4.83,"actual":null},"2026-12|ULP Abepura|ens":{"target":201.65,"actual":null},"2026-12|ULP Abepura|negative":{"target":4,"actual":null},"2026-12|ULP Abepura|response":{"target":30,"actual":null},"2026-01|ULP Sentani|sales":{"target":10.1248938357,"actual":10.90103},"2026-01|ULP Sentani|loss":{"target":11.1785148872322,"actual":12.802037716014922},"2026-01|ULP Sentani|saidi":{"target":31.42,"actual":15.14},"2026-01|ULP Sentani|saifi":{"target":0.35,"actual":0.2481},"2026-01|ULP Sentani|ens":{"target":8.6,"actual":3.828},"2026-01|ULP Sentani|negative":{"target":1,"actual":0},"2026-01|ULP Sentani|response":{"target":30,"actual":null},"2026-02|ULP Sentani|sales":{"target":19.8540199589,"actual":20.86108},"2026-02|ULP Sentani|loss":{"target":11.1407925709138,"actual":12.039389100099521},"2026-02|ULP Sentani|saidi":{"target":62.84,"actual":28.74},"2026-02|ULP Sentani|saifi":{"target":0.7,"actual":0.32},"2026-02|ULP Sentani|ens":{"target":17.19,"actual":9.729},"2026-02|ULP Sentani|negative":{"target":1,"actual":3},"2026-02|ULP Sentani|response":{"target":30,"actual":22.03},"2026-03|ULP Sentani|sales":{"target":29.9087387623,"actual":31.81393},"2026-03|ULP Sentani|loss":{"target":11.0937632211249,"actual":11.08787986164488},"2026-03|ULP Sentani|saidi":{"target":94.26,"actual":38.035},"2026-03|ULP Sentani|saifi":{"target":1.05,"actual":0.419},"2026-03|ULP Sentani|ens":{"target":25.79,"actual":11.3},"2026-03|ULP Sentani|negative":{"target":2,"actual":3},"2026-03|ULP Sentani|response":{"target":30,"actual":20.42},"2026-04|ULP Sentani|sales":{"target":41.332444123,"actual":42.2489},"2026-04|ULP Sentani|loss":{"target":11.0657499331277,"actual":11.015886047096993},"2026-04|ULP Sentani|saidi":{"target":125.67,"actual":63.36},"2026-04|ULP Sentani|saifi":{"target":1.4,"actual":0.678},"2026-04|ULP Sentani|ens":{"target":34.39,"actual":16.48},"2026-04|ULP Sentani|negative":{"target":2,"actual":3},"2026-04|ULP Sentani|response":{"target":30,"actual":21.01},"2026-05|ULP Sentani|sales":{"target":52.2566425335,"actual":53.11},"2026-05|ULP Sentani|loss":{"target":11.0377314700439,"actual":11.078680713966106},"2026-05|ULP Sentani|saidi":{"target":157.09,"actual":109.79},"2026-05|ULP Sentani|saifi":{"target":1.75,"actual":0.98},"2026-05|ULP Sentani|ens":{"target":42.99,"actual":24.51},"2026-05|ULP Sentani|negative":{"target":2,"actual":3},"2026-05|ULP Sentani|response":{"target":30,"actual":20.98},"2026-06|ULP Sentani|sales":{"target":62.7867233194,"actual":63.77},"2026-06|ULP Sentani|loss":{"target":11.0002286870161,"actual":null},"2026-06|ULP Sentani|saidi":{"target":188.51,"actual":null},"2026-06|ULP Sentani|saifi":{"target":2.1,"actual":null},"2026-06|ULP Sentani|ens":{"target":51.58,"actual":null},"2026-06|ULP Sentani|negative":{"target":2,"actual":3},"2026-06|ULP Sentani|response":{"target":30,"actual":20.03},"2026-07|ULP Sentani|sales":{"target":73.5261439528,"actual":null},"2026-07|ULP Sentani|loss":{"target":10.9721153838677,"actual":null},"2026-07|ULP Sentani|saidi":{"target":219.93,"actual":null},"2026-07|ULP Sentani|saifi":{"target":2.45,"actual":null},"2026-07|ULP Sentani|ens":{"target":60.18,"actual":null},"2026-07|ULP Sentani|negative":{"target":3,"actual":null},"2026-07|ULP Sentani|response":{"target":30,"actual":null},"2026-08|ULP Sentani|sales":{"target":84.3949472431,"actual":null},"2026-08|ULP Sentani|loss":{"target":10.9345070334362,"actual":null},"2026-08|ULP Sentani|saidi":{"target":251.35,"actual":null},"2026-08|ULP Sentani|saifi":{"target":2.8,"actual":null},"2026-08|ULP Sentani|ens":{"target":68.78,"actual":null},"2026-08|ULP Sentani|negative":{"target":3,"actual":null},"2026-08|ULP Sentani|response":{"target":30,"actual":null},"2026-09|ULP Sentani|sales":{"target":95.1754854132,"actual":null},"2026-09|ULP Sentani|loss":{"target":10.9064379746981,"actual":null},"2026-09|ULP Sentani|saidi":{"target":282.77,"actual":null},"2026-09|ULP Sentani|saifi":{"target":3.15,"actual":null},"2026-09|ULP Sentani|ens":{"target":77.38,"actual":null},"2026-09|ULP Sentani|negative":{"target":3,"actual":null},"2026-09|ULP Sentani|response":{"target":30,"actual":null},"2026-10|ULP Sentani|sales":{"target":106.5871191844,"actual":null},"2026-10|ULP Sentani|loss":{"target":10.8783466299878,"actual":null},"2026-10|ULP Sentani|saidi":{"target":314.19,"actual":null},"2026-10|ULP Sentani|saifi":{"target":3.5,"actual":null},"2026-10|ULP Sentani|ens":{"target":85.97,"actual":null},"2026-10|ULP Sentani|negative":{"target":3,"actual":null},"2026-10|ULP Sentani|response":{"target":30,"actual":null},"2026-11|ULP Sentani|sales":{"target":117.7960518881,"actual":null},"2026-11|ULP Sentani|loss":{"target":10.8597977420278,"actual":null},"2026-11|ULP Sentani|saidi":{"target":345.6,"actual":null},"2026-11|ULP Sentani|saifi":{"target":3.85,"actual":null},"2026-11|ULP Sentani|ens":{"target":94.57,"actual":null},"2026-11|ULP Sentani|negative":{"target":3,"actual":null},"2026-11|ULP Sentani|response":{"target":30,"actual":null},"2026-12|ULP Sentani|sales":{"target":129.0288564863,"actual":null},"2026-12|ULP Sentani|loss":{"target":10.8317148390432,"actual":null},"2026-12|ULP Sentani|saidi":{"target":377.02,"actual":null},"2026-12|ULP Sentani|saifi":{"target":4.19,"actual":null},"2026-12|ULP Sentani|ens":{"target":103.17,"actual":null},"2026-12|ULP Sentani|negative":{"target":3,"actual":null},"2026-12|ULP Sentani|response":{"target":30,"actual":null},"2026-01|ULP Arso|sales":{"target":3.0358617866,"actual":3.27546},"2026-01|ULP Arso|loss":{"target":8.37293577505836,"actual":8.470489465359625},"2026-01|ULP Arso|saidi":{"target":3.24424244508273,"actual":0.822},"2026-01|ULP Arso|saifi":{"target":0.09,"actual":0.013},"2026-01|ULP Arso|ens":{"target":0.7,"actual":0.053},"2026-01|ULP Arso|negative":{"target":0,"actual":0},"2026-01|ULP Arso|response":{"target":30,"actual":null},"2026-02|ULP Arso|sales":{"target":5.9005811506,"actual":6.18746},"2026-02|ULP Arso|loss":{"target":8.33660450796593,"actual":8.839585633506388},"2026-02|ULP Arso|saidi":{"target":6.48848489016546,"actual":1.2899999999999998},"2026-02|ULP Arso|saifi":{"target":0.18,"actual":0.047},"2026-02|ULP Arso|ens":{"target":1.41,"actual":0.099},"2026-02|ULP Arso|negative":{"target":0,"actual":0},"2026-02|ULP Arso|response":{"target":30,"actual":28.95},"2026-03|ULP Arso|sales":{"target":8.8760722671,"actual":9.40215},"2026-03|ULP Arso|loss":{"target":8.28914284125579,"actual":8.99621102921156},"2026-03|ULP Arso|saidi":{"target":9.73272733524819,"actual":1.32},"2026-03|ULP Arso|saifi":{"target":0.27,"actual":0.047},"2026-03|ULP Arso|ens":{"target":2.11,"actual":0.099},"2026-03|ULP Arso|negative":{"target":0,"actual":0},"2026-03|ULP Arso|response":{"target":30,"actual":28.61},"2026-04|ULP Arso|sales":{"target":12.0967757719,"actual":12.53449},"2026-04|ULP Arso|loss":{"target":8.26224378718616,"actual":8.595308444121448},"2026-04|ULP Arso|saidi":{"target":12.9769697803309,"actual":2.289},"2026-04|ULP Arso|saifi":{"target":0.36,"actual":0.051},"2026-04|ULP Arso|ens":{"target":2.81,"actual":0.275},"2026-04|ULP Arso|negative":{"target":0,"actual":0},"2026-04|ULP Arso|response":{"target":30,"actual":29.12},"2026-05|ULP Arso|sales":{"target":15.0876527133,"actual":15.82},"2026-05|ULP Arso|loss":{"target":8.23513870368351,"actual":8.69968141313776},"2026-05|ULP Arso|saidi":{"target":16.2212122254136,"actual":10.54},"2026-05|ULP Arso|saifi":{"target":0.45,"actual":0.15},"2026-05|ULP Arso|ens":{"target":3.52,"actual":1.134},"2026-05|ULP Arso|negative":{"target":0,"actual":0},"2026-05|ULP Arso|response":{"target":30,"actual":29.11},"2026-06|ULP Arso|sales":{"target":18.3132410634,"actual":19.13},"2026-06|ULP Arso|loss":{"target":8.19806661828435,"actual":null},"2026-06|ULP Arso|saidi":{"target":19.4654546704964,"actual":null},"2026-06|ULP Arso|saifi":{"target":0.55,"actual":null},"2026-06|ULP Arso|ens":{"target":4.22,"actual":null},"2026-06|ULP Arso|negative":{"target":0,"actual":0},"2026-06|ULP Arso|response":{"target":30,"actual":26.42},"2026-07|ULP Arso|sales":{"target":21.3006742418,"actual":null},"2026-07|ULP Arso|loss":{"target":8.17042243347232,"actual":null},"2026-07|ULP Arso|saidi":{"target":22.7096971155791,"actual":null},"2026-07|ULP Arso|saifi":{"target":0.64,"actual":null},"2026-07|ULP Arso|ens":{"target":4.92,"actual":null},"2026-07|ULP Arso|negative":{"target":1,"actual":null},"2026-07|ULP Arso|response":{"target":30,"actual":null},"2026-08|ULP Arso|sales":{"target":24.8188666815,"actual":null},"2026-08|ULP Arso|loss":{"target":8.13269100505883,"actual":null},"2026-08|ULP Arso|saidi":{"target":25.9539395606618,"actual":null},"2026-08|ULP Arso|saifi":{"target":0.73,"actual":null},"2026-08|ULP Arso|ens":{"target":5.63,"actual":null},"2026-08|ULP Arso|negative":{"target":1,"actual":null},"2026-08|ULP Arso|response":{"target":30,"actual":null},"2026-09|ULP Arso|sales":{"target":27.6342546196,"actual":null},"2026-09|ULP Arso|loss":{"target":8.1053202623508,"actual":null},"2026-09|ULP Arso|saidi":{"target":29.1981820057446,"actual":null},"2026-09|ULP Arso|saifi":{"target":0.82,"actual":null},"2026-09|ULP Arso|ens":{"target":6.33,"actual":null},"2026-09|ULP Arso|negative":{"target":1,"actual":null},"2026-09|ULP Arso|response":{"target":30,"actual":null},"2026-10|ULP Arso|sales":{"target":31.1814350658,"actual":null},"2026-10|ULP Arso|loss":{"target":8.07776641517057,"actual":null},"2026-10|ULP Arso|saidi":{"target":32.4424244508273,"actual":null},"2026-10|ULP Arso|saifi":{"target":0.91,"actual":null},"2026-10|ULP Arso|ens":{"target":7.03,"actual":null},"2026-10|ULP Arso|negative":{"target":1,"actual":null},"2026-10|ULP Arso|response":{"target":30,"actual":null},"2026-11|ULP Arso|sales":{"target":34.4881593093,"actual":null},"2026-11|ULP Arso|loss":{"target":8.0605549426273,"actual":null},"2026-11|ULP Arso|saidi":{"target":35.68666689591,"actual":null},"2026-11|ULP Arso|saifi":{"target":1,"actual":null},"2026-11|ULP Arso|ens":{"target":7.74,"actual":null},"2026-11|ULP Arso|negative":{"target":1,"actual":null},"2026-11|ULP Arso|response":{"target":30,"actual":null},"2026-12|ULP Arso|sales":{"target":37.4810769551,"actual":null},"2026-12|ULP Arso|loss":{"target":8.03304010004637,"actual":null},"2026-12|ULP Arso|saidi":{"target":38.9309093409927,"actual":null},"2026-12|ULP Arso|saifi":{"target":1.09,"actual":null},"2026-12|ULP Arso|ens":{"target":8.44,"actual":null},"2026-12|ULP Arso|negative":{"target":1,"actual":null},"2026-12|ULP Arso|response":{"target":30,"actual":null},"2026-01|ULP Genyem|sales":{"target":1.515127557,"actual":1.48075},"2026-01|ULP Genyem|loss":{"target":8.63419492507447,"actual":7.805454739245625},"2026-01|ULP Genyem|saidi":{"target":3.62849785815524,"actual":0.0359},"2026-01|ULP Genyem|saifi":{"target":0.100791607170979,"actual":0.004},"2026-01|ULP Genyem|ens":{"target":0.7,"actual":0.01},"2026-01|ULP Genyem|negative":{"target":0,"actual":0},"2026-01|ULP Genyem|response":{"target":30,"actual":null},"2026-02|ULP Genyem|sales":{"target":2.6818313088,"actual":2.77048},"2026-02|ULP Genyem|loss":{"target":8.61895611821822,"actual":7.201912173785336},"2026-02|ULP Genyem|saidi":{"target":7.25699571631048,"actual":0.048},"2026-02|ULP Genyem|saifi":{"target":0.201583214341958,"actual":0.004},"2026-02|ULP Genyem|ens":{"target":1.41,"actual":0.01},"2026-02|ULP Genyem|negative":{"target":0,"actual":0},"2026-02|ULP Genyem|response":{"target":30,"actual":40.16},"2026-03|ULP Genyem|sales":{"target":3.7431092374,"actual":4.17087},"2026-03|ULP Genyem|loss":{"target":8.58923450320395,"actual":7.710634754601513},"2026-03|ULP Genyem|saidi":{"target":10.8854935744657,"actual":0.11},"2026-03|ULP Genyem|saifi":{"target":0.302374821512937,"actual":0.004},"2026-03|ULP Genyem|ens":{"target":2.11,"actual":0.01},"2026-03|ULP Genyem|negative":{"target":0,"actual":0},"2026-03|ULP Genyem|response":{"target":30,"actual":36.29},"2026-04|ULP Genyem|sales":{"target":5.5428975909,"actual":5.52101},"2026-04|ULP Genyem|loss":{"target":8.5782635224466,"actual":7.959502284498809},"2026-04|ULP Genyem|saidi":{"target":14.513991432621,"actual":15.41},"2026-04|ULP Genyem|saifi":{"target":0.403166428683916,"actual":0.03},"2026-04|ULP Genyem|ens":{"target":2.81,"actual":0.293},"2026-04|ULP Genyem|negative":{"target":0,"actual":1},"2026-04|ULP Genyem|response":{"target":30,"actual":39.12},"2026-05|ULP Genyem|sales":{"target":7.0015875375,"actual":6.91},"2026-05|ULP Genyem|loss":{"target":8.5663156066844,"actual":8.682549016481019},"2026-05|ULP Genyem|saidi":{"target":18.1424892907762,"actual":16.7},"2026-05|ULP Genyem|saifi":{"target":0.503958035854895,"actual":0.043},"2026-05|ULP Genyem|ens":{"target":3.52,"actual":0.504},"2026-05|ULP Genyem|negative":{"target":0,"actual":1},"2026-05|ULP Genyem|response":{"target":30,"actual":36.7},"2026-06|ULP Genyem|sales":{"target":8.3700435015,"actual":8.35},"2026-06|ULP Genyem|loss":{"target":8.54644082454102,"actual":null},"2026-06|ULP Genyem|saidi":{"target":21.7709871489315,"actual":null},"2026-06|ULP Genyem|saifi":{"target":0.604749643025874,"actual":null},"2026-06|ULP Genyem|ens":{"target":4.22,"actual":null},"2026-06|ULP Genyem|negative":{"target":0,"actual":1},"2026-06|ULP Genyem|response":{"target":30,"actual":32.28},"2026-07|ULP Genyem|sales":{"target":9.6359603859,"actual":null},"2026-07|ULP Genyem|loss":{"target":8.53224744224173,"actual":null},"2026-07|ULP Genyem|saidi":{"target":25.3994850070867,"actual":null},"2026-07|ULP Genyem|saifi":{"target":0.705541250196853,"actual":null},"2026-07|ULP Genyem|ens":{"target":4.92,"actual":null},"2026-07|ULP Genyem|negative":{"target":1,"actual":null},"2026-07|ULP Genyem|response":{"target":30,"actual":null},"2026-08|ULP Genyem|sales":{"target":11.0340908812,"actual":null},"2026-08|ULP Genyem|loss":{"target":8.50960348606529,"actual":null},"2026-08|ULP Genyem|saidi":{"target":29.0279828652419,"actual":null},"2026-08|ULP Genyem|saifi":{"target":0.806332857367832,"actual":null},"2026-08|ULP Genyem|ens":{"target":5.63,"actual":null},"2026-08|ULP Genyem|negative":{"target":1,"actual":null},"2026-08|ULP Genyem|response":{"target":30,"actual":null},"2026-09|ULP Genyem|sales":{"target":12.8894519254,"actual":null},"2026-09|ULP Genyem|loss":{"target":8.49657944089619,"actual":null},"2026-09|ULP Genyem|saidi":{"target":32.6564807233972,"actual":null},"2026-09|ULP Genyem|saifi":{"target":0.90712446453881,"actual":null},"2026-09|ULP Genyem|ens":{"target":6.33,"actual":null},"2026-09|ULP Genyem|negative":{"target":1,"actual":null},"2026-09|ULP Genyem|response":{"target":30,"actual":null},"2026-10|ULP Genyem|sales":{"target":14.1721202255,"actual":null},"2026-10|ULP Genyem|loss":{"target":8.48275733937789,"actual":null},"2026-10|ULP Genyem|saidi":{"target":36.2849785815524,"actual":null},"2026-10|ULP Genyem|saifi":{"target":1.00791607170979,"actual":null},"2026-10|ULP Genyem|ens":{"target":7.03,"actual":null},"2026-10|ULP Genyem|negative":{"target":1,"actual":null},"2026-10|ULP Genyem|response":{"target":30,"actual":null},"2026-11|ULP Genyem|sales":{"target":15.390974968,"actual":null},"2026-11|ULP Genyem|loss":{"target":8.47847168047322,"actual":null},"2026-11|ULP Genyem|saidi":{"target":39.9134764397077,"actual":null},"2026-11|ULP Genyem|saifi":{"target":1.10870767888077,"actual":null},"2026-11|ULP Genyem|ens":{"target":7.74,"actual":null},"2026-11|ULP Genyem|negative":{"target":1,"actual":null},"2026-11|ULP Genyem|response":{"target":30,"actual":null},"2026-12|ULP Genyem|sales":{"target":17.1307579233,"actual":null},"2026-12|ULP Genyem|loss":{"target":8.46479300175293,"actual":null},"2026-12|ULP Genyem|saidi":{"target":43.5419742978629,"actual":null},"2026-12|ULP Genyem|saifi":{"target":1.20949928605175,"actual":null},"2026-12|ULP Genyem|ens":{"target":8.44,"actual":null},"2026-12|ULP Genyem|negative":{"target":1,"actual":null},"2026-12|ULP Genyem|response":{"target":30,"actual":null},"2026-01|ULP Sarmi|sales":{"target":1.519356389,"actual":1.68565},"2026-01|ULP Sarmi|loss":{"target":11.1785148872322,"actual":4.647191809192181},"2026-01|ULP Sarmi|saidi":{"target":2.18,"actual":0.28},"2026-01|ULP Sarmi|saifi":{"target":0.06,"actual":0.0052},"2026-01|ULP Sarmi|ens":{"target":0.55,"actual":0.01},"2026-01|ULP Sarmi|negative":{"target":0,"actual":0},"2026-01|ULP Sarmi|response":{"target":30,"actual":null},"2026-02|ULP Sarmi|sales":{"target":3.2161705531,"actual":3.16724},"2026-02|ULP Sarmi|loss":{"target":11.1407925709138,"actual":6.2662975517684725},"2026-02|ULP Sarmi|saidi":{"target":4.35,"actual":0.30600000000000005},"2026-02|ULP Sarmi|saifi":{"target":0.12,"actual":0.0052},"2026-02|ULP Sarmi|ens":{"target":1.09,"actual":0.01},"2026-02|ULP Sarmi|negative":{"target":0,"actual":0},"2026-02|ULP Sarmi|response":{"target":30,"actual":32.9},"2026-03|ULP Sarmi|sales":{"target":4.6712138368,"actual":4.7795},"2026-03|ULP Sarmi|loss":{"target":11.0937632211249,"actual":7.722169474946152},"2026-03|ULP Sarmi|saidi":{"target":6.53,"actual":0.652},"2026-03|ULP Sarmi|saifi":{"target":0.18,"actual":0.0117},"2026-03|ULP Sarmi|ens":{"target":1.64,"actual":0.01},"2026-03|ULP Sarmi|negative":{"target":0,"actual":0},"2026-03|ULP Sarmi|response":{"target":30,"actual":27.78},"2026-04|ULP Sarmi|sales":{"target":6.5482220759,"actual":6.36804},"2026-04|ULP Sarmi|loss":{"target":11.0657499331277,"actual":8.205082716179195},"2026-04|ULP Sarmi|saidi":{"target":8.7,"actual":1.05},"2026-04|ULP Sarmi|saifi":{"target":0.24,"actual":0.019},"2026-04|ULP Sarmi|ens":{"target":2.19,"actual":0.01},"2026-04|ULP Sarmi|negative":{"target":0,"actual":0},"2026-04|ULP Sarmi|response":{"target":30,"actual":32.88},"2026-05|ULP Sarmi|sales":{"target":8.0794140152,"actual":8.04},"2026-05|ULP Sarmi|loss":{"target":11.0377314700439,"actual":8.29990554347651},"2026-05|ULP Sarmi|saidi":{"target":10.88,"actual":21.475},"2026-05|ULP Sarmi|saifi":{"target":0.3,"actual":0.07},"2026-05|ULP Sarmi|ens":{"target":2.74,"actual":0.7},"2026-05|ULP Sarmi|negative":{"target":0,"actual":0},"2026-05|ULP Sarmi|response":{"target":30,"actual":31.42},"2026-06|ULP Sarmi|sales":{"target":9.421706704,"actual":9.71},"2026-06|ULP Sarmi|loss":{"target":11.0002286870161,"actual":null},"2026-06|ULP Sarmi|saidi":{"target":13.05,"actual":46.43},"2026-06|ULP Sarmi|saifi":{"target":0.36,"actual":0.2387},"2026-06|ULP Sarmi|ens":{"target":3.28,"actual":2.299},"2026-06|ULP Sarmi|negative":{"target":0,"actual":0},"2026-06|ULP Sarmi|response":{"target":30,"actual":27.7},"2026-07|ULP Sarmi|sales":{"target":11.1576402078,"actual":11.36},"2026-07|ULP Sarmi|loss":{"target":10.9721153838677,"actual":null},"2026-07|ULP Sarmi|saidi":{"target":15.23,"actual":null},"2026-07|ULP Sarmi|saifi":{"target":0.42,"actual":null},"2026-07|ULP Sarmi|ens":{"target":3.83,"actual":null},"2026-07|ULP Sarmi|negative":{"target":1,"actual":null},"2026-07|ULP Sarmi|response":{"target":30,"actual":null},"2026-08|ULP Sarmi|sales":{"target":12.6910260674,"actual":13.05},"2026-08|ULP Sarmi|loss":{"target":10.9345070334362,"actual":null},"2026-08|ULP Sarmi|saidi":{"target":17.41,"actual":null},"2026-08|ULP Sarmi|saifi":{"target":0.48,"actual":null},"2026-08|ULP Sarmi|ens":{"target":4.38,"actual":null},"2026-08|ULP Sarmi|negative":{"target":1,"actual":null},"2026-08|ULP Sarmi|response":{"target":30,"actual":null},"2026-09|ULP Sarmi|sales":{"target":14.7341058473,"actual":null},"2026-09|ULP Sarmi|loss":{"target":10.9064379746981,"actual":null},"2026-09|ULP Sarmi|saidi":{"target":19.58,"actual":null},"2026-09|ULP Sarmi|saifi":{"target":0.54,"actual":null},"2026-09|ULP Sarmi|ens":{"target":4.92,"actual":null},"2026-09|ULP Sarmi|negative":{"target":1,"actual":null},"2026-09|ULP Sarmi|response":{"target":30,"actual":null},"2026-10|ULP Sarmi|sales":{"target":16.4394060256,"actual":null},"2026-10|ULP Sarmi|loss":{"target":10.8783466299878,"actual":null},"2026-10|ULP Sarmi|saidi":{"target":21.76,"actual":null},"2026-10|ULP Sarmi|saifi":{"target":0.6,"actual":null},"2026-10|ULP Sarmi|ens":{"target":5.47,"actual":null},"2026-10|ULP Sarmi|negative":{"target":1,"actual":null},"2026-10|ULP Sarmi|response":{"target":30,"actual":null},"2026-11|ULP Sarmi|sales":{"target":18.0406619089,"actual":null},"2026-11|ULP Sarmi|loss":{"target":10.8597977420278,"actual":null},"2026-11|ULP Sarmi|saidi":{"target":23.93,"actual":null},"2026-11|ULP Sarmi|saifi":{"target":0.66,"actual":null},"2026-11|ULP Sarmi|ens":{"target":6.02,"actual":null},"2026-11|ULP Sarmi|negative":{"target":1,"actual":null},"2026-11|ULP Sarmi|response":{"target":30,"actual":null},"2026-12|ULP Sarmi|sales":{"target":19.808314223,"actual":null},"2026-12|ULP Sarmi|loss":{"target":10.8317148390432,"actual":null},"2026-12|ULP Sarmi|saidi":{"target":26.11,"actual":null},"2026-12|ULP Sarmi|saifi":{"target":0.72,"actual":null},"2026-12|ULP Sarmi|ens":{"target":6.57,"actual":null},"2026-12|ULP Sarmi|negative":{"target":1,"actual":null},"2026-12|ULP Sarmi|response":{"target":30,"actual":null}};
const $=id=>document.getElementById(id), storageKey='jayapura-distribusi-v1';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt=v=>v==null?'—':new Intl.NumberFormat('id-ID',{maximumFractionDigits:4}).format(v);
const dateFmt=(value,style='long')=>new Intl.DateTimeFormat('id-ID',{month:style,year:'numeric',timeZone:'UTC'}).format(new Date(value+'-01T00:00:00Z'));
let group=0, selected=0, db={};
try{
 const saved=JSON.parse(localStorage.getItem(storageKey)||'{}');
 if(saved&&typeof saved==='object'&&!Array.isArray(saved))db=saved;
}catch{}
$('unit').innerHTML=units.map(u=>'<option>'+u+'</option>').join('');
$('source').value='excel';
let chartType='line';
try{
 const preferred=localStorage.getItem(storageKey+'-chart');
 if(['line','bar','dot'].includes(preferred))chartType=preferred;
}catch{}
$('chartType').value=chartType;
$('chartType').onchange=()=>{
 chartType=$('chartType').value;
 try{localStorage.setItem(storageKey+'-chart',chartType)}catch{}
 render();
};
const key=(m,u,id)=>[m,u,id].join('|');
const budget=i=>indicators[i][5]===4;
const integer=i=>['kali','ulasan','WO'].includes(indicators[i][2]);
const capped=i=>['loss','yantek_sla'].includes(indicators[i][0]);
const validMonth=m=>/^20\d\d-(0[1-9]|1[0-2])$/.test(m);
const cumulativeIds=['sales','loss','saidi','saifi','ens','negative'];
function values(m,i,u=$('unit').value){
 const id=key(m,u,indicators[i][0]);
 const base=workbookRecords[id]||{};
 return $('source').value==='work'?{...base,...db[id]}:base;
}
function status(r,i){
 if(r.actual==null||r.target==null)return 'Belum lengkap';
 return (indicators[i][3]==='up'?r.actual>=r.target:r.actual<=r.target)?'Tercapai':'Perlu tindak lanjut';
}
function series(month){
 const [y,m]=month.split('-').map(Number);
 return Array.from({length:12},(_,i)=>{const d=new Date(Date.UTC(y,m-12+i,1));const p=d.toISOString().slice(0,7);return {p,...values(p,selected)}});
}
function performancePlot(points,meta,empty){
 const all=points.flatMap(p=>[p.actual,p.target]).filter(v=>v!=null);
 if(!all.length)return '<p class="summary">'+empty+'</p>';
 const max=Math.max(...all)*1.12||1, spacing=528/points.length;
 const x=i=>62+spacing*(i+.5), y=v=>225-192*(v/max);
 const width=Math.min(20,spacing*.32);
 let svg='<svg data-chart-type="'+chartType+'" viewBox="0 0 640 260" role="img" aria-label="Grafik target dan realisasi '+meta[1]+'">';
 for(let j=0;j<=4;j++){
  const v=max*(j/4);
  svg+='<path d="M62 '+y(v)+'H590" stroke="#e0ebef"/><text x="56" y="'+(y(v)+4)+'" text-anchor="end" fill="#526b7d" font-size="10">'+fmt(v)+'</text>';
 }
 points.forEach((p,i)=>{svg+='<text x="'+x(i)+'" y="245" text-anchor="middle" font-size="10" fill="#526b7d">'+esc(p.label)+'</text>'});
 for(const [field,color,dash,label,offset] of [['target','#49748e','5 4','Target',-1],['actual','#008577','0','Realisasi',1]]){
  points.forEach((p,i)=>{
   const value=p[field];
   if(value==null)return;
   const title='<title>'+esc(p.fullLabel??p.label)+' · '+label+' '+fmt(value)+' '+meta[2]+'</title>';
   if(chartType==='bar'){
    const height=Math.max(1.5,225-y(value)), left=x(i)+offset*(width/2+1)-width/2;
    svg+='<rect x="'+left+'" y="'+(225-height)+'" width="'+width+'" height="'+height+'" fill="'+color+'" rx="2">'+title+'</rect>';
    return;
   }
   if(chartType==='line'&&i&&points[i-1][field]!=null)svg+='<path d="M'+x(i-1)+' '+y(points[i-1][field])+' L'+x(i)+' '+y(value)+'" fill="none" stroke="'+color+'" stroke-width="3" stroke-dasharray="'+dash+'"/>';
   const shift=chartType==='dot'?offset*5:0;
   svg+='<circle cx="'+(x(i)+shift)+'" cy="'+y(value)+'" r="4.5" fill="'+color+'" stroke="#fff" stroke-width="1">'+title+'</circle>';
  });
 }
 return svg+'</svg>';
}
function draw(month){
 const points=series(month), meta=indicators[selected];
 $('trendTable').innerHTML='<table><thead><tr><th>Bulan</th><th>Target</th><th>Realisasi</th></tr></thead><tbody>'+points.map(p=>'<tr><td>'+dateFmt(p.p)+'</td><td>'+fmt(p.target)+'</td><td>'+fmt(p.actual)+'</td></tr>').join('')+'</tbody></table>';
 const labels=points.map(p=>({...p,label:dateFmt(p.p,'short').split(' ')[0],fullLabel:dateFmt(p.p)}));
 $('chart').innerHTML=performancePlot(labels,meta,'Belum ada angka untuk 12 bulan terakhir pada pilihan ini.');
}
function render(){
 const m=$('month').value;
 if(!/^20\d\d-(0[1-9]|1[0-2])$/.test(m))return;
 $('chartControl').style.display=['overview','comparison'].includes(view)?'':'none';
 const period=dateFmt(m)+' · '+$('unit').value;
 $('heroPeriod').textContent=period;
 const working=$('source').value==='work';
 const statuses=indicators.map((_,i)=>status(values(m,i),i));
 $('summary').textContent=(working?'DATA KERJA · Excel dan perubahan di browser':'DATA EXCEL · Realisasi Kinerja UP3 Jayapura 2026')+'  |  '+statuses.filter(s=>s==='Tercapai').length+' tercapai · '+statuses.filter(s=>s==='Perlu tindak lanjut').length+' perlu tindak lanjut · '+statuses.filter(s=>s==='Belum lengkap').length+' belum lengkap';
 $('tabs').innerHTML=groups.map((g,i)=>'<button data-group="'+i+'" aria-pressed="'+(i===group)+'">'+g+'</button>').join('');
 $('tiles').innerHTML=indicators.map((meta,i)=>{
  if(group&&meta[5]!==group-1)return '';
  const r=values(m,i), s=status(r,i),cls=s==='Tercapai'?'good':s==='Perlu tindak lanjut'?'bad':'muted';
  return '<button class="tile" data-indicator="'+i+'" aria-pressed="'+(i===selected)+'">'+meta[1]+'<strong>'+fmt(r.actual)+' <span class="muted">'+meta[2]+'</span></strong><span class="muted">Target '+fmt(r.target)+' · </span><span class="small '+cls+'">'+s+'</span></button>';
 }).join('');
 const meta=indicators[selected], r=values(m,selected), delta=r.actual==null||r.target==null?null:r.actual-r.target;
 $('chartTitle').textContent=meta[1];
 $('chartSub').textContent='Tren 12 bulan · '+meta[2]+(budget(selected)?' · penyerapan kumulatif':cumulativeIds.includes(meta[0])?' · kumulatif s.d. bulan terpilih':'')+' · Selisih bulan terpilih '+(delta==null?'—':(delta>0?'+':'')+fmt(delta)+(meta[2]==='%'?' poin persentase':''));
 $('notePeriod').textContent=period+' · '+meta[1];
 $('notes').innerHTML=notesFields.map(([k,label])=>'<div><strong>'+label+'</strong><p>'+esc(r[k]||'—')+'</p></div>').join('');
 if(view==='overview')draw(m);else renderWorkspace(m);
}
$('tabs').onclick=e=>{if(!e.target.matches('[data-group]'))return;group=Number(e.target.dataset.group);if(group&&indicators[selected][5]!==group-1)selected=indicators.findIndex(x=>x[5]===group-1);render()};
$('tiles').onclick=e=>{const b=e.target.closest('[data-indicator]');if(b){selected=Number(b.dataset.indicator);render();$('tiles').querySelector('[aria-pressed=true]').focus()}};
for(const id of ['month','unit','source'])$(id).onchange=render;
$('print').onclick=()=>window.print();
let editKey, notesOnly;
$('edit').onclick=()=>openEditor(false);
$('editNotes').onclick=()=>openEditor(true);
function openEditor(onlyNotes){
 const m=$('month').value;if(!$('month').reportValidity()||!/^20\d\d-(0[1-9]|1[0-2])$/.test(m))return;
 const meta=indicators[selected], u=$('unit').value;
 notesOnly=onlyNotes;
 editKey=key(m,u,meta[0]);const r={...workbookRecords[editKey],...db[editKey]};
 $('editTitle').textContent=(notesOnly?'Edit analisa & evaluasi · ':'Input data kerja · ')+meta[1];
 $('editPeriod').textContent=dateFmt(m)+' · '+u+(!notesOnly&&budget(selected)?' · masukkan persentase kumulatif penyerapan':'');
 const amount=(k,label)=>'<label>'+label+' ('+meta[2]+')<input name="'+k+'" type="number" min="0" step="'+(integer(selected)?1:'any')+'" '+(capped(selected)?'max="100"':'')+' value="'+esc(r[k])+'"></label>';
 $('fields').innerHTML=(notesOnly?'':amount('target','Target')+amount('actual','Realisasi'))+(notesOnly?notesFields.slice(0,2):notesFields).map(([k,label],i)=>'<label class="'+(i<3?'wide':'')+'">'+label+(i<3?'<textarea name="'+k+'" maxlength="3000">'+esc(r[k])+'</textarea>':k==='status'?'<select name="status">'+['','Direncanakan','Berjalan','Selesai','Tertunda'].map(s=>'<option value="'+s+'" '+(r[k]===s?'selected':'')+'>'+(s||'Pilih status')+'</option>').join('')+'</select>':'<input name="'+k+'" maxlength="160" type="'+(k==='deadline'?'date':'text')+'" value="'+esc(r[k])+'">')+'</label>').join('');
 $('error').textContent='';$('dialog').showModal();
 if(notesOnly)$('editor').elements.analysis.focus();
}
$('cancel').onclick=()=>$('dialog').close();
function persist(next){localStorage.setItem(storageKey,JSON.stringify(next));db=next}
$('editor').onsubmit=e=>{
 e.preventDefault();const row=Object.fromEntries(new FormData(e.target));
 if(!notesOnly)for(const k of ['target','actual'])row[k]=row[k]===''?null:Number(row[k]);
 try{persist({...db,[editKey]:{...db[editKey],...row}});$('source').value='work';$('dialog').close();render();if(notesOnly)$('summary').textContent+=' · Analisa dan evaluasi tersimpan'}catch{$('error').textContent='Data gagal disimpan. Periksa izin atau kapasitas penyimpanan browser.'}
};
$('export').onclick=()=>{
 const records={...workbookRecords};
 for(const [id,row] of Object.entries(db))records[id]={...records[id],...row};
 const url=URL.createObjectURL(new Blob([JSON.stringify({version:1,records},null,2)],{type:'application/json'}));
 const a=document.createElement('a');a.href=url;a.download='Data_Kinerja_UP3_Jayapura.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
};
$('import').onclick=()=>$('file').click();
$('file').onchange=async e=>{
 const file=e.target.files[0];if(!file)return;
 try{
  const {version,records}=JSON.parse(await file.text());
  if(version!==1||!records||Array.isArray(records)||typeof records!=='object')throw Error();
  const clean={};
  for(const [id,row] of Object.entries(records)){
   const [m,u,k,...extra]=id.split('|');const i=indicators.findIndex(a=>a[0]===k);
   if(extra.length||!/^20\d\d-(0[1-9]|1[0-2])$/.test(m)||!units.includes(u)||i<0||!row||Array.isArray(row)||typeof row!=='object')throw Error();
   const safe={};
   for(const f of ['target','actual']){
    const v=row[f];if(v!=null&&(!Number.isFinite(v)||v<0||(capped(i)&&v>100)||(integer(i)&&!Number.isInteger(v))))throw Error();safe[f]=v??null;
   }
   for(const [f] of notesFields){const v=row[f]??'';if(typeof v!=='string'||v.length>3000)throw Error();safe[f]=v}
   if(row.details!==undefined){
    const schema=detailSchema(k);
    if(!schema||!Array.isArray(row.details))throw Error();
    safe.details=row.details.map(entry=>validateDetail(entry,schema));
   }
   clean[id]=safe;
  }
  const collisions=Object.keys(clean).filter(id=>Object.hasOwn(db,id)).length;
  if(collisions&&!confirm(collisions+' entri pada periode, unit, dan indikator yang sama akan diperbarui. Lanjutkan?'))return;
  for(const id of Object.keys(clean))clean[id]={...db[id],...clean[id]};
  persist({...db,...clean});$('source').value='work';render();
  $('summary').textContent+=' · '+Object.keys(clean).length+' entri diimpor';
 }catch{alert('Impor gagal. Gunakan file JSON hasil ekspor dashboard dan periksa kapasitas penyimpanan.')}finally{e.target.value=''}
};
const assetIds=['feeder','transformer','cubicle','recloser','lbs'];
const causeIds=['saidi','saifi','ens'];
const findIndicator=id=>indicators.findIndex(row=>row[0]===id);
const faultCodes={
 I1:'Komponen JTM',I2:'Peralatan JTM',I3:'Gardu',I4:'Tiang',
 E1:'Pohon',E2:'Bencana Alam',E3:'Hewan/Pihak ke-3',E4:'Layangan/Benda Asing'
};
const faultCodeLabel=code=>Object.hasOwn(faultCodes,code)?code+' · '+faultCodes[code]:code;
const faultCodeGroup=code=>code.startsWith('I')?'Internal':'Eksternal';
const faultCodeField=['causeCode','Kode penyebab gangguan',Object.keys(faultCodes)];
const assetFields=[
 ['asset','Nama / ID aset','text',true],['rating','Rating teknis (mis. 630 A atau 160 kVA)','text'],
 ['brand','Merek / pabrikan','text'],['date','Tanggal kejadian','date'],
 faultCodeField,['cause','Penyebab / indikasi','text'],['count','Jumlah kejadian','number',true],
 ['note','Catatan / tindakan','text']
];
const outageKinds=['Terencana','Tidak terencana','Emergency','Eksternal'];
const upstreamSources=['KIT','Transmisi','GI'];
const causeGroups=['Internal','Eksternal'];
const feederKinds=['Temporary','Permanent'];
const internalCauses=['Komponen','Material','Konstruksi / instalasi','Proteksi / setting','Peralatan'];
const externalCauses=['Pohon / vegetasi','Hewan','Alam / petir','Cuaca ekstrem','Pihak ketiga'];
const feederCauses=[...internalCauses,...externalCauses,'Belum teridentifikasi','Lainnya'];
const feederFields=[
 ...assetFields.slice(0,4),['faultType','Kategori gangguan',feederKinds],
 faultCodeField,['cause','Penyebab gangguan','text',true],...assetFields.slice(6)
];
const causeFields=[
 ['outageType','Kategori pemadaman',outageKinds],
 ['upstream','Sumber eksternal',upstreamSources],
 faultCodeField,
 ['causeGroup','Kelompok penyebab',causeGroups],
 ['cause','Penyebab','text',true],
 ['contribution','Kontribusi indikator','number',true],
 ['note','Catatan / sumber data','text']
];
const detailSchema=id=>id==='feeder'?feederFields:assetIds.includes(id)?assetFields:causeIds.includes(id)?causeFields:null;
const emptyFilters=()=>({brand:'',rating:'',cause:'',faultType:'',outageType:'',causeGroup:'',causeCode:''});
let view='overview', assetChoice='feeder', causeChoice='saidi', detailEdit, detailFilters=emptyFilters();
function validateDetail(entry,schema,requireCategories=false){
 if(!entry||typeof entry!=='object'||Array.isArray(entry))throw Error('Isi rincian dengan format yang sesuai.');
 const clean={};
 for(const [field,label,type,required] of schema){
  const value=entry[field]??'';
  if(Array.isArray(type)){
   const needed=requireCategories&&field!=='causeCode'&&(field!=='upstream'||entry.outageType==='Eksternal');
   if((value!==''&&!type.includes(value))||(needed&&!value))throw Error('Periksa isian '+label+'.');
  }else if(type==='number'){
   if(typeof value!=='number'||!Number.isFinite(value)||value<0||(field==='count'&&(!Number.isInteger(value)||value<1)))throw Error('Periksa nilai '+label+'.');
  }else if(typeof value!=='string'||value.length>300||(required&&!value.trim()&&(field!=='cause'||schema!==feederFields||requireCategories))||(type==='date'&&value&&!/^20\d\d-\d\d-\d\d$/.test(value)))throw Error('Periksa isian '+label+'.');
  clean[field]=typeof value==='string'?value.trim():value;
 }
 if(clean.causeCode&&clean.causeGroup&&clean.causeGroup!==faultCodeGroup(clean.causeCode))throw Error('Kelompok penyebab harus sesuai dengan kode gangguan.');
 if(clean.upstream&&clean.outageType!=='Eksternal')throw Error('Sumber eksternal berlaku untuk kategori pemadaman Eksternal.');
 return clean;
}
function selectIndicator(id,choices,label,active){
 return '<label>'+label+'<select id="'+id+'">'+choices.map(k=>'<option value="'+k+'" '+(k===active?'selected':'')+'>'+indicators[findIndicator(k)][1]+'</option>').join('')+'</select></label>';
}
function showOverview(unit,i){
 $('unit').value=unit;
 selected=i;
 if(group&&indicators[i][5]!==group-1)group=0;
 changeView('overview');
 $('tiles').querySelector('[aria-pressed=true]')?.focus();
}
function changeView(next){
 view=next;
 $('overview').hidden=view!=='overview';
 $('workspace').hidden=view==='overview';
 for(const button of $('views').querySelectorAll('button'))button.setAttribute('aria-pressed',String(button.dataset.view===view));
 render();
}
$('views').onclick=e=>{
 const button=e.target.closest('[data-view]');
 if(!button)return;
 const next=button.dataset.view, id=indicators[selected][0];
 if(next==='assets'&&assetIds.includes(id))assetChoice=id;
 if(next==='causes'&&causeIds.includes(id))causeChoice=id;
 detailFilters=emptyFilters();
 changeView(next);
};
const heading=(title,subtitle,control='')=>'<div class="sectionhead"><div><h2>'+title+'</h2><p class="muted">'+subtitle+'</p></div>'+control+'</div>';
const bar=(value,max,cls='')=>'<div class="track '+cls+'" aria-hidden="true"><span style="width:'+Math.min(100,100*(value??0)/max)+'%"></span></div>';
const statusClass=s=>s==='Tercapai'?'good':s==='Perlu tindak lanjut'?'bad':'muted';
const allIds=indicators.map(row=>row[0]);
function compareMarkup(m){
 const meta=indicators[selected];
 const rows=units.slice(1).map((u,j)=>({j:j+1,u,...values(m,selected,u)}));
 const plot=performancePlot(rows.map(r=>({...r,label:r.u.slice(4)})),meta,'Belum ada angka per ULP pada periode ini.');
 return heading('Kinerja per ULP',dateFmt(m)+' · '+meta[2]+' · Pilih ULP untuk membuka tren bulanannya.',selectIndicator('workspaceIndicator',allIds,'Indikator',meta[0]))+
 '<div class="legend"><span><i style="background:#008577"></i>Realisasi</span><span><i style="background:#49748e"></i>Target</span></div><div class="chart">'+plot+'</div>'+
 '<div class="tablewrap"><table><thead><tr><th>ULP</th><th>Realisasi</th><th>Target</th><th>Status</th></tr></thead><tbody>'+
 rows.map(r=>'<tr><td><button data-unit="'+r.j+'">'+r.u.slice(4)+'</button></td><td>'+fmt(r.actual)+'</td><td>'+fmt(r.target)+'</td><td class="'+statusClass(status(r,selected))+'">'+status(r,selected)+'</td></tr>').join('')+'</tbody></table></div>';
}
const mapPlaces=[
 {lat:-2.5333,lon:140.7,dx:36,dy:-29},
 {lat:-2.5964,lon:140.6324,dx:33,dy:27},
 {lat:-2.5684,lon:140.5052,dx:-52,dy:30},
 {lat:-2.9028,lon:140.7657,dx:23,dy:26},
 {lat:-2.5791,lon:140.1495,dx:-14,dy:25},
 {lat:-1.8547,lon:138.7493,dx:0,dy:-24}
];
const worldPixel=(lat,lon)=>{
 const world=256*2**9;
 return [(lon+180)/360*world,(1-Math.asinh(Math.tan(lat*Math.PI/180))/Math.PI)/2*world];
};
function mapMarkup(m){
 const meta=indicators[selected], width=900,height=400;
 const [centerX,centerY]=worldPixel(-2.36,139.77);
 const left=centerX-width/2, top=centerY-height/2;
 let tiles='';
 for(let x=Math.floor(left/256);x<=Math.floor((left+width)/256);x++){
  for(let y=Math.floor(top/256);y<=Math.floor((top+height)/256);y++){
   tiles+='<img alt="" loading="lazy" src="https://tile.openstreetmap.org/9/'+x+'/'+y+'.png" style="left:'+(x*256-left)/width*100+'%;top:'+(y*256-top)/height*100+'%">';
  }
 }
 let points='',pins='';
 const cards=mapPlaces.map((p,j)=>{
  const u=units[j+1], r=values(m,selected,u), s=status(r,selected), cls=statusClass(s);
  const [px,py]=worldPixel(p.lat,p.lon), x=px-left,y=py-top;
  const color=cls==='good'?'#008577':cls==='bad'?'#b43e25':'#6b8292';
  points+='<line x1="'+x+'" y1="'+y+'" x2="'+(x+p.dx)+'" y2="'+(y+p.dy)+'" stroke="#486577" stroke-width="1.4"/><circle cx="'+x+'" cy="'+y+'" r="5.5" fill="'+color+'" stroke="white" stroke-width="2"/>';
  const label=u.slice(4)+' · '+fmt(r.actual);
  pins+='<button class="pin" data-unit="'+(j+1)+'" title="'+u+' · '+s+'" style="left:'+(x+p.dx)/width*100+'%;top:'+(y+p.dy)/height*100+'%"><b class="'+cls+'"></b>'+label+'</button>';
  return '<button data-unit="'+(j+1)+'"><i class="dot '+cls+'"></i>'+label+'</button>';
 }).join('');
 return heading('Peta ULP',dateFmt(m)+' · '+meta[2]+' · Titik menunjukkan pusat lokalitas sebagai acuan.',selectIndicator('workspaceIndicator',allIds,'Indikator',meta[0]))+
 '<div class="map-scroll"><div class="map-box">'+tiles+'<svg viewBox="0 0 900 400" aria-hidden="true">'+points+'</svg>'+pins+'</div></div>'+
 '<p class="muted map-attribution"><a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap contributors</a></p><div class="legend-key muted"><span><i class="dot good"></i>Tercapai</span><span><i class="dot bad"></i>Perlu tindak lanjut</span><span><i class="dot"></i>Belum lengkap</span></div><p class="muted">Pilih penanda untuk membuka tren dan catatan ULP.</p><div class="map-units">'+cards+'</div>';
}
function detailData(m,id){
 return values(m,findIndicator(id)).details??[];
}
function aggregate(rows,groupBy,field){
 const totals=new Map();
 for(const row of rows){
  const title=groupBy(row), k=title.toLocaleLowerCase('id');
  const item=totals.get(k)??{title,total:0};
  item.total+=row[field];
  totals.set(k,item);
 }
 return [...totals.values()].sort((a,b)=>b.total-a.total);
}
const uncategorized='Belum dikategorikan';
const filterSelect=(key,label,options)=>'<label>'+label+'<select data-filter-select="'+key+'">'+['',...options,uncategorized].map(v=>'<option value="'+v+'" '+(v===detailFilters[key]?'selected':'')+'>'+(key==='causeCode'?faultCodeLabel(v)||'Semua kode':v||'Semua kategori')+'</option>').join('')+'</select></label>';
const filterText=(key,label,placeholder)=>'<label>'+label+'<input data-filter="'+key+'" value="'+esc(detailFilters[key])+'" placeholder="'+placeholder+'"></label>';
function breakdown(title,rows,groupBy,field,meta,actual){
 const totals=aggregate(rows,groupBy,field);
 const max=Math.max(.01,...totals.map(r=>r.total));
 return '<section class="breakdown"><h3>'+title+'</h3>'+totals.map(r=>'<div class="detailbar"><span>'+esc(r.title)+'</span>'+bar(r.total,max)+'<strong>'+fmt(r.total)+' '+meta[2]+(actual>0&&field==='contribution'?' · '+fmt(r.total/actual*100)+'% KPI':'')+'</strong></div>').join('')+'</section>';
}
function detailMarkup(m,isAsset){
 const id=isAsset?assetChoice:causeChoice, choices=isAsset?assetIds:causeIds, i=findIndicator(id);
 const meta=indicators[i], schema=detailSchema(id), work=$('source').value==='work', feeder=id==='feeder';
 const period=dateFmt(m)+' · '+$('unit').value;
 const textKeys=isAsset?(feeder?['brand','rating','cause']:['brand','rating']):['cause'];
 const selectKeys=['causeCode',...(feeder?['faultType']:isAsset?[]:['outageType','causeGroup'])];
 const rows=detailData(m,id).map((row,index)=>({row,index})).filter(({row})=>
  textKeys.every(f=>(row[f]||'').toLocaleLowerCase('id').includes(detailFilters[f].toLocaleLowerCase('id').trim()))&&
  selectKeys.every(f=>!detailFilters[f]||(row[f]||uncategorized)===detailFilters[f])
 );
 const field=isAsset?'count':'contribution', entries=rows.map(r=>r.row);
 const total=entries.reduce((sum,r)=>sum+r[field],0), actual=values(m,i).actual;
 const assetFilters=isAsset?filterText('brand','Merek','Semua merek')+filterText('rating','Rating teknis','Semua rating'):'';
 const categoryFilters=feeder?filterSelect('faultType','Kategori gangguan',feederKinds):isAsset?'':filterSelect('outageType','Kategori pemadaman',outageKinds)+filterSelect('causeGroup','Kelompok penyebab',causeGroups);
 const filters='<div class="data-filters">'+assetFilters+categoryFilters+filterSelect('causeCode','Kode penyebab',Object.keys(faultCodes))+(feeder||!isAsset?filterText('cause','Penyebab','Cari penyebab'):'')+'</div>';
 const label=isAsset?'Jenis aset':'Indikator';
 const columns=schema.map(([f,t])=>'<th scope="col">'+(f==='rating'?'Rating teknis':t)+'</th>').join('');
 const chart=(title,groupBy)=>breakdown(title,entries,groupBy,field,meta,actual);
 const assetChart=()=>chart('Gangguan per merek dan rating',r=>(r.brand||'Merek belum diisi')+' / '+(r.rating||'Rating belum diisi'));
 const charts=isAsset?(feeder?
  chart('Kategori gangguan',r=>r.faultType||uncategorized)+
  chart('Penyebab gangguan',r=>r.cause||'Penyebab belum diisi')+assetChart():assetChart()):
  chart('Kategori pemadaman',r=>r.outageType||uncategorized)+
  chart('Kelompok penyebab',r=>r.causeGroup||uncategorized)+
  chart('Rincian penyebab',r=>[r.causeGroup,r.cause].filter(Boolean).join(' · '))+
  (entries.some(r=>r.outageType==='Eksternal')?breakdown('Sumber pemadaman eksternal',entries.filter(r=>r.outageType==='Eksternal'),r=>r.upstream||uncategorized,field,meta,actual):'');
 return heading(isAsset?'Detail gangguan aset':'Penyebab SAIDI, SAIFI &amp; ENS',period+' · '+meta[2],selectIndicator('detailIndicator',choices,label,id))+
 '<div class="toolbar"><button class="primary edit" data-add>Tambah rincian</button></div>'+filters+
 '<p class="muted">'+(isAsset?'Jumlah kejadian pada rincian terfilter':'Total kontribusi terfilter')+' '+(rows.length?fmt(total):'—')+' '+meta[2]+' · Realisasi KPI '+fmt(actual)+' '+meta[2]+'</p>'+
 (isAsset?'':'<p class="muted">Kategori pemadaman dan kelompok penyebab merangkum kontribusi yang sama dari dua sudut pandang.</p>')+
 (rows.length?'<div class="breakdowns">'+charts+chart('Kode penyebab gangguan',r=>faultCodeLabel(r.causeCode)||uncategorized)+'</div>'+
 '<div class="tablewrap details-table"><table><thead><tr>'+columns+(work?'<th class="row-actions">Tindakan</th>':'')+'</tr></thead><tbody>'+rows.map(({row,index})=>'<tr>'+schema.map(([f,,type])=>'<td>'+esc(type==='number'?fmt(row[f]):(f==='causeCode'?faultCodeLabel(row[f]):row[f])||(Array.isArray(type)&&f!=='upstream'?uncategorized:'—'))+'</td>').join('')+(work?'<td class="row-actions"><button data-edit-row="'+index+'">Edit</button> <button data-remove-row="'+index+'">Hapus</button></td>':'')+'</tr>').join('')+'</tbody></table></div>':'<p class="summary">Belum ada rincian pada pilihan ini.</p>');
}
function renderWorkspace(m){
 $('workspace').innerHTML=view==='comparison'?compareMarkup(m):view==='map'?mapMarkup(m):detailMarkup(m,view==='assets');
}
$('workspace').onchange=e=>{
 const {id,value}=e.target, field=e.target.dataset.filterSelect;
 if(field){
  detailFilters[field]=value;
  renderWorkspace($('month').value);
  $('workspace').querySelector('[data-filter-select="'+field+'"]')?.focus();
  return;
 }
 if(id==='workspaceIndicator')selected=findIndicator(value);
 else if(id==='detailIndicator'){
  if(view==='assets')assetChoice=value;else causeChoice=value;
  detailFilters=emptyFilters();
 }else return;
 renderWorkspace($('month').value);
 $(id)?.focus();
};
$('workspace').oninput=e=>{
 const field=e.target.dataset.filter;
 if(!field)return;
 const position=e.target.selectionStart;
 detailFilters[field]=e.target.value;
 renderWorkspace($('month').value);
 const input=$('workspace').querySelector('[data-filter="'+field+'"]');
 input.focus();input.setSelectionRange(position,position);
};
function openDetail(m,id,index){
 const u=$('unit').value, schema=detailSchema(id), recordKey=key(m,u,id);
 const entry=index==null?{}:db[recordKey]?.details?.[index];
 if(!entry)return;
 detailEdit={recordKey,schema,index};
 $('detailTitle').textContent=(index==null?'Tambah rincian · ':'Edit rincian · ')+indicators[findIndicator(id)][1];
 $('detailPeriod').textContent=dateFmt(m)+' · '+u+' · Data kerja';
 $('detailFields').innerHTML=schema.map(([f,label,type,required])=>{
  if(Array.isArray(type))return '<label'+(f==='upstream'?' id="upstreamField"':'')+'>'+label+'<select name="'+f+'" '+(['upstream','causeCode'].includes(f)?'':'required')+'><option value="">Pilih</option>'+type.map(v=>'<option value="'+v+'" '+(v===entry[f]?'selected':'')+'>'+(f==='causeCode'?faultCodeLabel(v):v)+'</option>').join('')+'</select></label>';
  const suggestions=f==='cause'&&(id==='feeder'||causeIds.includes(id))?' list="causeSuggestions"':'';
  return '<label>'+label+'<input name="'+f+'" type="'+type+'" value="'+esc(entry[f])+'" '+(required?'required ':'')+(type==='number'?(f==='count'?'min="1" step="1"':'min="0" step="any"'):'maxlength="300"')+(type==='date'?' min="'+m+'-01" max="'+m+'-'+new Date(Date.UTC(Number(m.slice(0,4)),Number(m.slice(5)),0)).getUTCDate()+'"':'')+suggestions+'></label>';
 }).join('')+'<datalist id="causeSuggestions"></datalist>';
 const updateOptions=event=>{
  const form=$('detailEditor');
  if(causeIds.includes(id)){
   const external=form.elements.outageType.value==='Eksternal';
   $('upstreamField').style.display=external?'':'none';
   form.elements.upstream.required=external;
   form.elements.upstream.disabled=!external;
   if(!external)form.elements.upstream.value='';
  }
  const code=form.elements.causeCode?.value;
  if(code&&form.elements.causeGroup)form.elements.causeGroup.value=faultCodeGroup(code);
  if(code&&event?.target.name==='causeCode'&&!form.elements.cause.value.trim())form.elements.cause.value=faultCodes[code];
  const group=form.elements.causeGroup?.value;
  const suggestions=group==='Internal'?internalCauses:group==='Eksternal'?externalCauses:feederCauses;
  $('causeSuggestions').innerHTML=suggestions.map(v=>'<option value="'+v+'"></option>').join('');
 };
 $('detailFields').onchange=updateOptions;
 updateOptions();
 $('detailError').textContent='';
 $('detailDialog').showModal();
}
$('detailCancel').onclick=()=>$('detailDialog').close();
$('workspace').onclick=e=>{
 const button=e.target.closest('button');
 if(!button)return;
 const data=button.dataset,m=$('month').value;
 if(!validMonth(m))return;
 if(data.unit!==undefined){showOverview(units[Number(data.unit)],selected);return}
 const id=view==='assets'?assetChoice:causeChoice;
 if(data.add!==undefined)openDetail(m,id,null);
 else if(data.editRow!==undefined)openDetail(m,id,Number(data.editRow));
 else if(data.removeRow!==undefined&&confirm('Hapus baris rincian ini?')){
  const k=key(m,$('unit').value,id), current=db[k];
  if(!current?.details?.[Number(data.removeRow)])return;
  try{
   persist({...db,[k]:{...current,details:current.details.filter((_,i)=>i!==Number(data.removeRow))}});
   render();
  }catch{alert('Rincian gagal dihapus dari penyimpanan browser.')}
 }
};
$('detailEditor').onsubmit=e=>{
 e.preventDefault();
 const {recordKey,schema,index}=detailEdit;
 const current=db[recordKey]||{}, rows=[...(current.details??[])];
 const input=Object.fromEntries(new FormData(e.target));
 for(const [f,,type] of schema)if(type==='number'&&input[f]!=='')input[f]=Number(input[f]);
 try{
  const row=validateDetail(input,schema,true);
  if(index==null)rows.push(row);else rows[index]=row;
  persist({...db,[recordKey]:{...current,details:rows}});
  $('source').value='work';
  detailFilters=emptyFilters();
  $('detailDialog').close();render();
 }catch(error){$('detailError').textContent=error instanceof DOMException?'Rincian gagal disimpan di browser.':error.message}
};

render();
