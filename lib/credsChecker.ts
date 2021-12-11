import { CREDENTIAL } from "../middleware/check_auth_perms";

export default function hasCreds(session, cred: CREDENTIAL) {
	if (!session) {
		return false;
	}

	for (var i = 0; i < session.user["roles"].length; i++) {
		if (session.user["roles"][i].name == "Admin") {
			return true;
		}
	}

	for (var i = 0; i < session.user["roles"].length; i++) {
		if (session.user["roles"][i].name == cred) {
			return true;
		}
	}

	return false;
}
