"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[9404],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||c[f]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4395:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=["components"],l={id:"enterprise-config",title:"Configuring BuildBuddy Enterprise",sidebar_label:"Enterprise Configuration"},s=void 0,u={unversionedId:"enterprise-config",id:"enterprise-config",title:"Configuring BuildBuddy Enterprise",description:"BuildBuddy Enterprise allows configuration of many features that are not available in the open-core version. Below you\u2019ll find examples for configuring some of these features. If you don\u2019t see what you\u2019re looking for below, please don\u2019t hesitate to ask us! For a full overview of what can be configured, see our Configuration docs.",source:"@site/../docs/enterprise-config.md",sourceDirName:".",slug:"/enterprise-config",permalink:"/docs/enterprise-config",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/enterprise-config.md",tags:[],version:"current",lastUpdatedBy:"Zoey Greer",lastUpdatedAt:1632775535,formattedLastUpdatedAt:"9/27/2021",frontMatter:{id:"enterprise-config",title:"Configuring BuildBuddy Enterprise",sidebar_label:"Enterprise Configuration"},sidebar:"someSidebar",previous:{title:"Enterprise On-prem Setup",permalink:"/docs/enterprise-setup"},next:{title:"Enterprise Helm Charts",permalink:"/docs/enterprise-helm"}},d=[{value:"MySQL Data Storage",id:"mysql-data-storage",children:[],level:3},{value:"Default Redis Target",id:"default-redis-target",children:[],level:3},{value:"GCS Based Cache / Object Storage / Redis",id:"gcs-based-cache--object-storage--redis",children:[],level:3},{value:"Authentication Provider Integration",id:"authentication-provider-integration",children:[],level:3},{value:"Certificate Based Authentication",id:"certificate-based-authentication",children:[],level:3},{value:"Remote Build Execution",id:"remote-build-execution",children:[],level:3},{value:"Putting It All Together",id:"putting-it-all-together",children:[],level:3},{value:"Learn more",id:"learn-more",children:[],level:2}],c={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"BuildBuddy Enterprise allows configuration of many features that are not available in the open-core version. Below you\u2019ll find examples for configuring some of these features. If you don\u2019t see what you\u2019re looking for below, please don\u2019t hesitate to ask us! For a full overview of what can be configured, see our ",(0,o.kt)("a",{parentName:"p",href:"/docs/config"},"Configuration docs"),"."),(0,o.kt)("h3",{id:"mysql-data-storage"},"MySQL Data Storage"),(0,o.kt)("p",null,"BuildBuddy uses a SQL connection string to specify the database it will connect to. An example string is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"mysql://user:pass@tcp(12.34.56.78)/database_name"\n')),(0,o.kt)("p",null,"To connect BuildBuddy to your own MySQL server:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new database on your MySQL server"),(0,o.kt)("li",{parentName:"ol"},"Create a new user with full access to that database"),(0,o.kt)("li",{parentName:"ol"},"Put the username, password, IP address of your MySQL server, and database name into the BuildBuddy data_source connection string:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'app:\n  build_buddy_url: "https://app.buildbuddy.mydomain.com"\n  events_api_url: "grpcs://events.buildbuddy.mydomain.com:1986"\n  cache_api_url: "grpcs://cache.buildbuddy.mydomain.com:1986"\ndatabase:\n  data_source: "mysql://user:pass@tcp(12.34.56.78)/database_name"\n')),(0,o.kt)("p",null,"If using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy-enterprise"},"BuildBuddy Enterprise Helm charts"),", MySQL can be configured for you using the ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql.enabled"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql.username"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql.password")," values."),(0,o.kt)("h3",{id:"default-redis-target"},"Default Redis Target"),(0,o.kt)("p",null,"For a BuildBuddy deployment running multiple apps, it is necessary to provide a default redis target for some features to work correctly. Metrics collection, usage tracking, and responsive build logs all depend on this."),(0,o.kt)("p",null,"If no default redis target is configured, we will fall back to using the cache redis target, if available, and then the remote execution target, if available. The default redis target also acts as the primary fallback if the remote execution redis target is left unspecified. The default redis target does NOT act as a fallback for the cache redis target."),(0,o.kt)("p",null,"The configuration below demostrates a default redis target:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'app:\n  default_redis_target: "my-redis.local:6379"\n')),(0,o.kt)("h3",{id:"gcs-based-cache--object-storage--redis"},"GCS Based Cache / Object Storage / Redis"),(0,o.kt)("p",null,"By default, BuildBuddy will cache objects and store uploaded build events on the local disk. If you want to store them in a shared durable location, like a Google Cloud Storage bucket, you can do that by configuring a GCS cache or storage backend."),(0,o.kt)("p",null,"If your BuildBuddy instance is running on a machine with Google Default Credentials, no credentials file will be necessary. If not, you should ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/docs/authentication/getting-started"},"create a service account")," with permissions to write to cloud storage, and download the credentials .json file."),(0,o.kt)("p",null,"We also recommend providing a Redis instance for improved remote build execution & small file performance. This can be configured automatically using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy-enterprise"},"BuildBuddy Enterprise Helm charts")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"redis.enabled")," value."),(0,o.kt)("p",null,"The configuration below configures Redis & GCS storage bucket to act as a storage backend and cache:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'storage:\n  ttl_seconds: 2592000  # 30 days\n  chunk_file_size_bytes: 3000000  # 3 MB\n  gcs:\n    bucket: "buildbuddy_prod_blobs"\n    project_id: "flame-build"\n    credentials_file: "your_service-acct.json"\ncache:\n  redis_target: "my-redis.local:6379"\n  gcs:\n    bucket: "buildbuddy_cache"\n    project_id: "your_gcs_project_id"\n    credentials_file: "/path/to/your/credential/file.json"\n    ttl_days: 30\n')),(0,o.kt)("p",null,"If using Amazon S3, you can configure your storage and cache similarly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'storage:\n  ttl_seconds: 2592000  # 30 days\n  chunk_file_size_bytes: 3000000  # 3 MB\n  aws_s3:\n    region: "us-west-2"\n    bucket: "buildbuddy-bucket"\n    credentials_profile: "other-profile"\ncache:\n  redis_target: "my-redis.local:6379"\n  s3:\n    region: "us-west-2"\n    bucket: "buildbuddy-bucket"\n    credentials_profile: "other-profile"\n    ttl_days: 30\n')),(0,o.kt)("h3",{id:"authentication-provider-integration"},"Authentication Provider Integration"),(0,o.kt)("p",null,"BuildBuddy supports OpenID Connect (OIDC) as a way of interacting with an Auth Provider like Google, Okta, or similar to authenticate your users when they log in. Configuring this is easy, below is an example of using BuildBuddy with Okta. Configuring your Auth Provider to support OIDC is outside the scope of this doc, but we\u2019ve done it for Google, Okta, and others, and are happy to lend a helping hand if you\u2019re stuck."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'auth:\n  oauth_providers:\n    - issuer_url: "https://your-custom-domain.okta.com"\n      client_id: "0aaa5twc0asdkUW123x6"\n      client_secret: "P8fRAYxWMmG9asd040GV2_q9MZ6esTJif1n4BubxU"\n')),(0,o.kt)("p",null,"Here\u2019s another example of Google login using credentials obtained from: ",(0,o.kt)("a",{parentName:"p",href:"https://console.developers.google.com/apis/credentials"},"https://console.developers.google.com/apis/credentials")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'auth:\n  oauth_providers:\n    - issuer_url: "https://accounts.google.com"\n      client_id: "YOUR_CLIENT_ID.apps.googleusercontent.com"\n      Client_secret: "YOUR_CLIENT_SECRET"\n')),(0,o.kt)("h3",{id:"certificate-based-authentication"},"Certificate Based Authentication"),(0,o.kt)("p",null,"Your users can authenticate to BuildBuddy using an API key or they can use Certificate based authentication over mTLS. To configure mTLS, you must generate a new server certificate authority and key. You can do this using the ",(0,o.kt)("inlineCode",{parentName:"p"},"openssl")," command, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# Change these CN\'s to match your BuildBuddy host name\nSERVER_SUBJECT=buildbuddy.io\nPASS=$(openssl rand -base64 32) # <- Save this :)\n\n# Generates ca.key\nopenssl genrsa -passout pass:${PASS} -des3 -out ca.key 4096\n\n# Generates ca.crt\nopenssl req -passin pass:${PASS} -new -x509 -days 365000 -key ca.key -out ca.crt -subj "/CN=${SERVER_SUBJECT}"\n\n# Generates ca.pem\nopenssl pkcs8 -passin pass:${PASS} -topk8 -nocrypt -in ca.key -out ca.pem\n')),(0,o.kt)("p",null,"Then, you can use the generated ca.csr and ca.pem files in your BuildBuddy configuration like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ssl:\n  enable_ssl: true\n  client_ca_cert_file: your_ca.crt\n  client_ca_key_file: your_ca.pem\n")),(0,o.kt)("h3",{id:"remote-build-execution"},"Remote Build Execution"),(0,o.kt)("p",null,"To enable Remote Build Execution, you'll need to add the following to your config.yaml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"remote_execution:\n  enable_remote_exec: true\n")),(0,o.kt)("p",null,"You'll also need to deploy executors to handle remote builds. The recommended way of deploying these is using our ",(0,o.kt)("a",{parentName:"p",href:"/docs/enterprise-helm"},"Enterprise Helm Chart"),"."),(0,o.kt)("p",null,"For more information on configuring on-prem RBE, see our ",(0,o.kt)("a",{parentName:"p",href:"/docs/enterprise-rbe"},"enterprise on-prem RBE setup docs"),"."),(0,o.kt)("h3",{id:"putting-it-all-together"},"Putting It All Together"),(0,o.kt)("p",null,"Here\u2019s what a fully-featured config.yaml looks like which includes all of the features listed above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'app:\n  build_buddy_url: "https://app.buildbuddy.mydomain"\n  events_api_url: "grpcs://events.buildbuddy.mydomain:1986"\n  cache_api_url: "grpcs://cache.buildbuddy.mydomain:1986"\ndatabase:\n  data_source: "mysql://user:pass@tcp(12.34.56.78)/database_name"\nstorage:\n  ttl_seconds: 2592000  # 30 days\n  chunk_file_size_bytes: 3000000  # 3 MB\n  gcs:\n    bucket: "buildbuddy_prod_blobs"\n    project_id: "flame-build"\n    credentials_file: "your_service-acct.json"\ncache:\n    gcs:\n      bucket: "buildbuddy_cache"\n      project_id: "your_gcs_project_id"\n      credentials_file: "/path/to/your/credential/file.json"\n      ttl_days: 30\nauth:\n  oauth_providers:\n    - issuer_url: "https://your-custom-domain.okta.com"\n      client_id: "0aaa5twc0asdkUW123x6"\n      client_secret: "P8fRAYxWMmG9asd040GV2_q9MZ6esTJif1n4BubxU"\nssl:\n  enable_ssl: true\n  client_ca_cert_file: your_ca.crt\n  client_ca_key_file: your_ca.pem\nremote_execution:\n  enable_remote_exec: true\n')),(0,o.kt)("h2",{id:"learn-more"},"Learn more"),(0,o.kt)("p",null,"For more information on configuring BuildBuddy, see our ",(0,o.kt)("a",{parentName:"p",href:"/docs/config"},"Configuration docs"),". If you have questions please don\u2019t hesitate to email us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:setup@buildbuddy.io"},"setup@buildbuddy.io")," or ping us on our ",(0,o.kt)("a",{parentName:"p",href:"https://slack.buildbuddy.io"},"Slack channel"),"."))}p.isMDXComponent=!0}}]);