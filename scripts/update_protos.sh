#! /bin/bash

TAG=$1

echo "Updating protos from lnd release tag: ${TAG}"
curl https://raw.githubusercontent.com/lightningnetwork/lnd/${TAG}/lnrpc/lightning.proto --create-dirs -o protos/lightning.proto
curl https://raw.githubusercontent.com/lightningnetwork/lnd/${TAG}/lnrpc/stateservice.proto --create-dirs -o protos/stateservice.proto
curl https://raw.githubusercontent.com/lightningnetwork/lnd/${TAG}/lnrpc/walletunlocker.proto --create-dirs -o protos/walletunlocker.proto
curl https://raw.githubusercontent.com/lightningnetwork/lnd/${TAG}/lnrpc/autopilotrpc/autopilot.proto --create-dirs -o protos/autopilotrpc/autopilot.proto
curl https://raw.githubusercontent.com/lightningnetwork/lnd/${TAG}/lnrpc/chainrpc/chainkit.proto --create-dirs -o protos/chainrpc/chainkit.proto
curl https://raw.githubusercontent.com/lightningnetwork/lnd/${TAG}/lnrpc/chainrpc/chainnotifier.proto --create-dirs -o protos/chainrpc/chainnotifier.proto
curl https://raw.githubusercontent.com/lightningnetwork/lnd/${TAG}/lnrpc/invoicesrpc/invoices.proto --create-dirs -o protos/invoicesrpc/invoices.proto
curl https://raw.githubusercontent.com/lightningnetwork/lnd/${TAG}/lnrpc/neutrinorpc/neutrino.proto --create-dirs -o protos/neutrinorpc/neutrino.proto
curl https://raw.githubusercontent.com/lightningnetwork/lnd/${TAG}/lnrpc/peersrpc/peers.proto --create-dirs -o protos/peersrpc/peers.proto
curl https://raw.githubusercontent.com/lightningnetwork/lnd/${TAG}/lnrpc/routerrpc/router.proto --create-dirs -o protos/routerrpc/router.proto
curl https://raw.githubusercontent.com/lightningnetwork/lnd/${TAG}/lnrpc/signrpc/signer.proto --create-dirs -o protos/signrpc/signer.proto
curl https://raw.githubusercontent.com/lightningnetwork/lnd/${TAG}/lnrpc/verrpc/verrpc.proto --create-dirs -o protos/verrpc/verrpc.proto
curl https://raw.githubusercontent.com/lightningnetwork/lnd/${TAG}/lnrpc/walletrpc/walletkit.proto --create-dirs -o protos/walletrpc/walletkit.proto
curl https://raw.githubusercontent.com/lightningnetwork/lnd/${TAG}/lnrpc/watchtowerrpc/watchtower.proto --create-dirs -o protos/watchtowerrpc/watchtower.proto
curl https://raw.githubusercontent.com/lightningnetwork/lnd/${TAG}/lnrpc/wtclientrpc/wtclient.proto --create-dirs -o protos/wtclientrpc/wtclient.proto