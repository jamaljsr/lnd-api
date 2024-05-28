import { Invoice, LndClient } from '../src';

const client = LndClient.create({
  socket: '127.0.0.1:10029',
  macaroon:
    '0201047461726f026f030a10547b993757fe7ec00d21c64d968b87fe1201301a180a09616464726573736573120472656164120577726974651a150a06617373657473120472656164120577726974651a0f0a066461656d6f6e120577726974651a150a0670726f6f66731204726561641205777269746500000620b33bcfc64629086b47201fb7b5691ef37ee2c1242a2407c64469730b5ad93945',
  cert: '2d2d2d2d2d424547494e2043455254494649434154452d2d2d2d2d0a4d4949436d544343416b436741774942416749514a575565526a59792b6c4f75363773492f373066376a414b42676771686b6a4f50515144416a41324d5341770a486759445651514b4578643059584a76494746316447396e5a57356c636d46305a57516759325679644445534d4241474131554541784d4a636d4e724c5852760a643256794d423458445449794d5445784e6a41354e5463314f466f58445449304d4445784d5441354e5463314f466f774e6a45674d4234474131554543684d580a6447467962794268645852765a3256755a584a686447566b49474e6c636e5178456a415142674e5642414d5443584a6a617931306233646c636a425a4d424d470a42797147534d34394167454743437147534d34394177454841304941424a336d426b784f685958725073304335672f315572696b692f586b303752534f504c760a64773058346b3061724a4a616e4849574e4c687542616a4f5a723555474f456462544e514d73775255584c3470365670447a2b6a676745754d4949424b6a414f0a42674e56485138424166384542414d4341715177457759445652306c42417777436759494b775942425155484177457744775944565230544151482f424155770a417745422f7a416442674e5648513445466751555737476f4d3839754276384e7870664a654e6b624b4c52344b423077676449474131556445515342796a43420a7834494a636d4e724c5852766432567967676c7362324e6862476876633353434248567561586943436e56756158687759574e725a58534342324a315a6d4e760a626d36484248384141414748454141414141414141414141414141414141414141414748424d436f415a6148424b775241414748424b775341414748455036410a41414141414141415366324635514c2b48324f4845503641414141414141414141454c432f2f354a3874654845503641414141414141414138464a492f2f36490a4c594f48455036414141414141414141304d79582f2f372f354c2b484550364141414141414141416b4b68782f2f375238742b484550364141414141414141410a374561472f2f364c786d4177436759494b6f5a497a6a30454177494452774177524149674a624a79436d4e76685643645646644456486a6a7048394f686a5a4a0a6c4e6e45317430304d617239656577434941395863726d4830676c4b6573427834433447484853424261455249422b476a447855636a7045753732630a2d2d2d2d2d454e442043455254494649434154452d2d2d2d2d0a',
});

(async () => {
  const { state } = await client.state.getState();
  console.log('State:', state);

  await client.walletUnlocker.unlockWallet({
    walletPassword: 'password',
  });

  const info = await client.lightning.getInfo();
  console.log('Info:', info);

  const { channels } = await client.lightning.listChannels({
    peerAliasLookup: true,
  });
  console.log('Channels:', channels);

  const { rHash, paymentRequest } = await client.lightning.addInvoice({
    memo: 'test invoice',
    value: '1000',
    expiry: '3600',
  });
  console.log('Invoice:', rHash, paymentRequest);

  const stream = client.invoices.subscribeSingleInvoice({ rHash });
  stream.on('data', (invoice: Invoice) => {
    console.log('Subscribed Invoice:', invoice);
  });
  stream.on('end', () => {
    console.log('Stream closed');
  });

  const autopilotStatus = await client.autopilot.status();
  console.log('Autopilot status:', autopilotStatus);

  const { blockHeight } = await client.chainKit.getBestBlock();
  console.log('Best block height:', blockHeight);

  const neutrinoStatus = await client.neutrino.status();
  console.log('Neutrino status:', neutrinoStatus);

  const announcement = await client.peers.updateNodeAnnouncement({
    alias: 'test' + Math.random().toString(36).substring(7),
  });
  console.log('Node announcement:', announcement);

  const missionControl = await client.router.queryMissionControl();
  console.log('Mission control:', missionControl);

  const signedMsg = await client.signer.signMessage({
    keyLoc: { keyFamily: 1, keyIndex: 1 },
    msg: 'message',
  });
  console.log('Signed message:', signedMsg);

  const version = await client.versioner.getVersion();
  console.log('Version:', version);

  const unspent = await client.walletKit.listUnspent();
  console.log('Wallet Unspent:', unspent);

  const towerInfo = await client.watchtower.getInfo();
  console.log('Watchtower info:', towerInfo);

  const towerClient = await client.watchtowerClient.getTowerInfo();
  console.log('Watchtower Client Info:', towerClient);
})();
