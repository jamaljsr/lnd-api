import { promisify } from 'util';
import { LndClientOptions } from './';
import { loadProto } from './proto';
import * as RPC from './types';
import { ProtoGrpcType } from './types/signer';

/**
 * API interface for lnd's Signer RPC sub-server.
 */
export class SignerApi {
  /**
   * Create a new SignerApi instance.
   */
  static create(options: LndClientOptions) {
    const { proto, credentials, params } = loadProto<ProtoGrpcType>(
      'signrpc/signer.proto',
      options
    );

    return new SignerApi(
      new proto.signrpc.Signer(options.socket, credentials, params)
    );
  }

  /**
   * The grpc client to contact daemon.
   */
  client: RPC.SignerClient;

  constructor(client: RPC.SignerClient) {
    this.client = client;
  }

  /**
   * SignOutputRaw is a method that can be used to generated a signature for a
   * set of inputs/outputs to a transaction. Each request specifies details
   * concerning how the outputs should be signed, which keys they should be
   * signed with, and also any optional tweaks. The return value is a fixed
   * 64-byte signature (the same format as we use on the wire in Lightning).
   *
   * If we are  unable to sign using the specified keys, then an error will be
   * returned.
   */
  async signOutputRaw(request: RPC.SignReqPartial = {}): Promise<RPC.SignResp> {
    return promisify(this.client.SignOutputRaw.bind(this.client))(request);
  }

  /**
   * ComputeInputScript generates a complete InputIndex for the passed
   * transaction with the signature as defined within the passed SignDescriptor.
   * This method should be capable of generating the proper input script for both
   * regular p2wkh/p2tr outputs and p2wkh outputs nested within a regular p2sh
   * output.
   *
   * Note that when using this method to sign inputs belonging to the wallet,
   * the only items of the SignDescriptor that need to be populated are pkScript
   * in the TxOut field, the value in that same field, and finally the input
   * index.
   */
  async computeInputScript(
    request: RPC.SignReqPartial = {}
  ): Promise<RPC.InputScriptResp> {
    return promisify(this.client.ComputeInputScript.bind(this.client))(request);
  }

  /**
   * SignMessage signs a message with the key specified in the key locator. The
   * returned signature is fixed-size LN wire format encoded.
   *
   * The main difference to SignMessage in the main RPC is that a specific key is
   * used to sign the message instead of the node identity private key.
   */
  async signMessage(
    request: RPC.SignMessageReqPartial = {}
  ): Promise<RPC.SignMessageResp> {
    return promisify(this.client.SignMessage.bind(this.client))(request);
  }

  /**
   * VerifyMessage verifies a signature over a message using the public key
   * provided. The signature must be fixed-size LN wire format encoded.
   *
   * The main difference to VerifyMessage in the main RPC is that the public key
   * used to sign the message does not have to be a node known to the network.
   */
  async verifyMessage(
    request: RPC.VerifyMessageReqPartial = {}
  ): Promise<RPC.VerifyMessageResp> {
    return promisify(this.client.VerifyMessage.bind(this.client))(request);
  }

  /**
   * DeriveSharedKey returns a shared secret key by performing Diffie-Hellman key
   * derivation between the ephemeral public key in the request and the node's
   * key specified in the key_desc parameter. Either a key locator or a raw
   * public key is expected in the key_desc, if neither is supplied, defaults to
   * the node's identity private key:
   * P_shared = privKeyNode * ephemeralPubkey
   * The resulting shared public key is serialized in the compressed format and
   * hashed with sha256, resulting in the final key length of 256bit.
   */
  async deriveSharedKey(
    request: RPC.SharedKeyRequestPartial = {}
  ): Promise<RPC.SharedKeyResponse> {
    return promisify(this.client.DeriveSharedKey.bind(this.client))(request);
  }

  /**
   * MuSig2CombineKeys (experimental!) is a stateless helper RPC that can be used
   * to calculate the combined MuSig2 public key from a list of all participating
   * signers' public keys. This RPC is completely stateless and deterministic and
   * does not create any signing session. It can be used to determine the Taproot
   * public key that should be put in an on-chain output once all public keys are
   * known. A signing session is only needed later when that output should be
   * _spent_ again.
   *
   * NOTE: The MuSig2 BIP is not final yet and therefore this API must be
   * considered to be HIGHLY EXPERIMENTAL and subject to change in upcoming
   * releases. Backward compatibility is not guaranteed!
   */
  async muSig2CombineKeys(
    request: RPC.MuSig2CombineKeysRequestPartial = {}
  ): Promise<RPC.MuSig2CombineKeysResponse> {
    return promisify(this.client.MuSig2CombineKeys.bind(this.client))(request);
  }

  /**
   * MuSig2CreateSession (experimental!) creates a new MuSig2 signing session
   * using the local key identified by the key locator. The complete list of all
   * public keys of all signing parties must be provided, including the public
   * key of the local signing key. If nonces of other parties are already known,
   * they can be submitted as well to reduce the number of RPC calls necessary
   * later on.
   *
   * NOTE: The MuSig2 BIP is not final yet and therefore this API must be
   * considered to be HIGHLY EXPERIMENTAL and subject to change in upcoming
   * releases. Backward compatibility is not guaranteed!
   */
  async muSig2CreateSession(
    request: RPC.MuSig2SessionRequestPartial = {}
  ): Promise<RPC.MuSig2SessionResponse> {
    return promisify(this.client.MuSig2CreateSession.bind(this.client))(
      request
    );
  }

  /**
   * MuSig2RegisterNonces (experimental!) registers one or more public nonces of
   * other signing participants for a session identified by its ID. This RPC can
   * be called multiple times until all nonces are registered.
   *
   * NOTE: The MuSig2 BIP is not final yet and therefore this API must be
   * considered to be HIGHLY EXPERIMENTAL and subject to change in upcoming
   * releases. Backward compatibility is not guaranteed!
   */
  async muSig2RegisterNonces(
    request: RPC.MuSig2RegisterNoncesRequestPartial = {}
  ): Promise<RPC.MuSig2RegisterNoncesResponse> {
    return promisify(this.client.MuSig2RegisterNonces.bind(this.client))(
      request
    );
  }

  /**
   * MuSig2Sign (experimental!) creates a partial signature using the local
   * signing key that was specified when the session was created. This can only
   * be called when all public nonces of all participants are known and have been
   * registered with the session. If this node isn't responsible for combining
   * all the partial signatures, then the cleanup flag should be set, indicating
   * that the session can be removed from memory once the signature was produced.
   *
   * NOTE: The MuSig2 BIP is not final yet and therefore this API must be
   * considered to be HIGHLY EXPERIMENTAL and subject to change in upcoming
   * releases. Backward compatibility is not guaranteed!
   */
  async muSig2Sign(
    request: RPC.MuSig2SignRequestPartial = {}
  ): Promise<RPC.MuSig2SignResponse> {
    return promisify(this.client.MuSig2Sign.bind(this.client))(request);
  }

  /**
   * MuSig2CombineSig (experimental!) combines the given partial signature(s)
   * with the local one, if it already exists. Once a partial signature of all
   * participants is registered, the final signature will be combined and
   * returned.
   *
   * NOTE: The MuSig2 BIP is not final yet and therefore this API must be
   * considered to be HIGHLY EXPERIMENTAL and subject to change in upcoming
   * releases. Backward compatibility is not guaranteed!
   */
  async muSig2CombineSig(
    request: RPC.MuSig2CombineSigRequestPartial = {}
  ): Promise<RPC.MuSig2CombineSigResponse> {
    return promisify(this.client.MuSig2CombineSig.bind(this.client))(request);
  }

  /**
   * MuSig2Cleanup (experimental!) allows a caller to clean up a session early in
   * cases where it's obvious that the signing session won't succeed and the
   * resources can be released.
   *
   * NOTE: The MuSig2 BIP is not final yet and therefore this API must be
   * considered to be HIGHLY EXPERIMENTAL and subject to change in upcoming
   * releases. Backward compatibility is not guaranteed!
   */
  async muSig2Cleanup(
    request: RPC.MuSig2CleanupRequestPartial = {}
  ): Promise<RPC.MuSig2CleanupResponse> {
    return promisify(this.client.MuSig2Cleanup.bind(this.client))(request);
  }
}
