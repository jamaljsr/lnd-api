import { loadProto } from './proto';
import { ProtoGrpcType } from './types/lightning';

async function main() {
  console.log('Hello, world!');
  const options = {
    socket: '127.0.0.1:8445',
    cert: '2d2d2d2d2d424547494e2043455254494649434154452d2d2d2d2d0a4d494943456a4343416269674177494241674952414a364856693830384c4358337077654a49506c52423877436759494b6f5a497a6a3045417749774d6a45670a4d4234474131554543684d5862476c305a434268645852765a3256755a584a686447566b49474e6c636e5178446a414d42674e5642414d544257467361574e6c0a4d423458445449304d4455794e4445354d7a55784d566f58445449314d4463784f5445354d7a55784d566f774d6a45674d4234474131554543684d5862476c300a5a434268645852765a3256755a584a686447566b49474e6c636e5178446a414d42674e5642414d544257467361574e6c4d466b77457759484b6f5a497a6a30430a415159494b6f5a497a6a30444151634451674145726a6850542b6a67734d6448482b6e46487a4174706b32374f777551386b446772646b5653364f35557146520a316b3643734d706775496c68452b695466727251595865514d4d3631556e6b544f4f727456677a6b504b4f42726a4342717a414f42674e5648513842416638450a42414d4341715177457759445652306c42417777436759494b775942425155484177457744775944565230544151482f42415577417745422f7a416442674e560a485134454667515556676d76546364334470666a593972726e514474424c6c4d65705177564159445652305242453077533449465957787059325743435778760a593246736147397a64494945645735706549494b64573570654842685932746c64494948596e566d59323975626f6345667741414159635141414141414141410a41414141414141414141414141596345724238414244414b42676771686b6a4f5051514441674e4941444246416945412b652b4d4946786a7666684c394973760a6a2b706c7a6c4267376770342b6176734f7832426a4d663573415943494338625166577478506755596831726b716d796c495a4752686366654a4c746f5277500a7a543433344637710a2d2d2d2d2d454e442043455254494649434154452d2d2d2d2d0a',
    macaroon:
      '0201047461706402b701030a10580911e1bf0a13e930dce4a784f2cf1a1201301a180a09616464726573736573120472656164120577726974651a150a06617373657473120472656164120577726974651a150a066461656d6f6e120472656164120577726974651a130a046d696e74120472656164120577726974651a150a0670726f6f6673120472656164120577726974651a120a03726671120472656164120577726974651a170a08756e697665727365120472656164120577726974650000062056d152e65775ac276b4d090f5d47307379f6eeb93cd6040aad18cb8bdba723a1',
  };

  const { proto, credentials, params } = loadProto<ProtoGrpcType>(
    'lightning.proto',
    options
  );

  const ln = new proto.lnrpc.Lightning(options.socket, credentials, params);

  // console.log({ proto, credentials, params });
  console.log(ln);
}

main();

/*

[2024-05-25 14:55:03.245] [debug] LndProxyServer: received request "lnd-get-info-request" [
  {
    "node": {
      "id": 0,
      "networkId": 1,
      "name": "alice",
      "type": "lightning",
      "implementation": "litd",
      "version": "0.12.99-alpha",
      "status": 1,
      "backendName": "backend1",
      "lndName": "alice",
      "paths": {
        "tlsCert": "/Users/jamal/.polar/networks/1/volumes/litd/alice/lnd/tls.cert",
        "litTlsCert": "/Users/jamal/.polar/networks/1/volumes/litd/alice/lit/tls.cert",
        "adminMacaroon": "/Users/jamal/.polar/networks/1/volumes/litd/alice/lnd/data/chain/bitcoin/regtest/admin.macaroon",
        "invoiceMacaroon": "/Users/jamal/.polar/networks/1/volumes/litd/alice/lnd/data/chain/bitcoin/regtest/invoice.macaroon",
        "readonlyMacaroon": "/Users/jamal/.polar/networks/1/volumes/litd/alice/lnd/data/chain/bitcoin/regtest/readonly.macaroon",
        "litMacaroon": "/Users/jamal/.polar/networks/1/volumes/litd/alice/lit/regtest/lit.macaroon",
        "tapMacaroon": "/Users/jamal/.polar/networks/1/volumes/litd/alice/tapd/data/regtest/admin.macaroon"
      },
      "ports": {
        "rest": 8381,
        "grpc": 13001,
        "p2p": 9635,
        "web": 8445
      },
      "docker": {
        "image": "",
        "command": ""
      }
    },
    "replyTo": "lnd-get-info-response-839304619732"
  }
]

*/
