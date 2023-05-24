(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{682:function(e,t,o){"use strict";o.r(t);var n=o(1),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"handling-proposals"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#handling-proposals"}},[e._v("#")]),e._v(" Handling proposals")]),e._v(" "),o("p",[e._v("It is possible to update the client with the state of the substitute client through a governance proposal. "),o("a",{attrs:{href:"https://ibc.cosmos.network/main/ibc/proposals.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("This type of governance proposal"),o("OutboundLink")],1),e._v(" is typically used to recover an expired or frozen client, as it can recover the entire state and therefore all existing channels built on top of the client. "),o("code",[e._v("CheckSubstituteAndUpdateState")]),e._v(" should be implemented to handle the proposal.")]),e._v(" "),o("h2",{attrs:{id:"implementing-checksubstituteandupdatestate"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#implementing-checksubstituteandupdatestate"}},[e._v("#")]),e._v(" Implementing "),o("code",[e._v("CheckSubstituteAndUpdateState")])]),e._v(" "),o("p",[e._v("In the "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/exported/client.go",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("ClientState")]),e._v("interface"),o("OutboundLink")],1),e._v(", we find:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ2hlY2tTdWJzdGl0dXRlQW5kVXBkYXRlU3RhdGUgbXVzdCB2ZXJpZnkgdGhhdCB0aGUgcHJvdmlkZWQgc3Vic3RpdHV0ZSBtYXkgYmUgdXNlZCB0byB1cGRhdGUgdGhlIHN1YmplY3QgY2xpZW50LgovLyBUaGUgbGlnaHQgY2xpZW50IG11c3Qgc2V0IHRoZSB1cGRhdGVkIGNsaWVudCBhbmQgY29uc2Vuc3VzIHN0YXRlcyB3aXRoaW4gdGhlIGNsaWVudFN0b3JlIGZvciB0aGUgc3ViamVjdCBjbGllbnQuCkNoZWNrU3Vic3RpdHV0ZUFuZFVwZGF0ZVN0YXRlKAogIGN0eCBzZGsuQ29udGV4dCwgCiAgY2RjIGNvZGVjLkJpbmFyeUNvZGVjLCAKICBzdWJqZWN0Q2xpZW50U3RvcmUsIAogIHN1YnN0aXR1dGVDbGllbnRTdG9yZSBzZGsuS1ZTdG9yZSwgCiAgc3Vic3RpdHV0ZUNsaWVudCBDbGllbnRTdGF0ZSwKKSBlcnJvcgo="}}),e._v(" "),o("p",[e._v("Prior to updating, this function must verify that:")]),e._v(" "),o("ul",[o("li",[e._v("the substitute client is the same type as the subject client. For a reference implementation, please see the "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/light-clients/07-tendermint/proposal_handle.go#L32",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint light client"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("the provided substitute may be used to update the subject client. This may mean that certain parameters must remain unaltered. For example, a "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/light-clients/07-tendermint/proposal_handle.go#L84",target:"_blank",rel:"noopener noreferrer"}},[e._v("valid substitute Tendermint light client"),o("OutboundLink")],1),e._v(" must NOT change the chain ID, trust level, max clock drift, unbonding period, proof specs or upgrade path. Please note that "),o("code",[e._v("AllowUpdateAfterMisbehaviour")]),e._v(" and "),o("code",[e._v("AllowUpdateAfterExpiry")]),e._v(" have been deprecated (see ADR 026 for more information).")])]),e._v(" "),o("p",[e._v("After these checks are performed, the function must "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/light-clients/07-tendermint/proposal_handle.go#L77",target:"_blank",rel:"noopener noreferrer"}},[e._v("set the updated client and consensus states"),o("OutboundLink")],1),e._v(" within the client store for the subject client.")]),e._v(" "),o("p",[e._v("Please refer to the "),o("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/light-clients/07-tendermint/proposal_handle.go#L27",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint light client implementation"),o("OutboundLink")],1),e._v(" for reference.")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);