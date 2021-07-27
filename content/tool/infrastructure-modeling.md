---
description: ''
sidebar: 'started'
---
# 인프라 모델링 (쿠버네티스)

## Getting started

Kuber-Ez는 Yaml 및 CLI에 대한 최소한의 이해만으로도 kubernetes 매니페스트 및 배포 모형을 구성할 수 있는 시각적 방식의 웹 기반 다이어그래밍 도구입니다.  
<br/>

<img src="https://user-images.githubusercontent.com/35618409/92839680-38a73d00-f41b-11ea-912d-3df071a2e32c.png" width="80%">

<br/>

<h3>about Kuber-Ez</h3>

- 쿠버네티스(https://kubernetes.io/)는 여러분들의 서비스가 무정지 배포 및 Self-Healing되어 항상성을 유지하도록 하는 강력한 기능을 가진 컨테이너 오케스트레이터(Container Orchestrator)입니다. 쿠버네티스상에 서비스를 배포/운영하려면 YAML 언어를 사용해 배포 전략을 작성해야 하고 이를 커맨드 라인 인터페이스(CLI)를 통해 관리해야 하는 등, Linux 운영체제의 운영경험과 많은 학습곡선을 요구합니다.
- Kuber-Ez는 Kubernetes Cluster상에 서비스를 쉽게 배포할 수 있도록 도와주는 도구입니다. 쿠버네티스 객체 기술언어인 YAML(Yet Another Markup Language) 파일을 GUI 환경에서 쉽게 작성되도록 도와 주며, Cluster에 자동 배포시켜 줍니다.
- 사용자는 쿠버네티스 기본 객체 모델에 대한 이해만으로 Kuber-Ez 도구를 활용하여 손쉽게 퍼블릭 클라우드 상에서 마이크로서비스를 배포 및 운영할 수 있습니다.

<br/>

<h3>Features</h3>

* Kuber-Ez는 Web Browser 환경에서 실행되며, Kubernetes(http://cncf.io)에서 정의하는 모든 객체들을 객체가 가진 기능별로 분류하여 도구의 오브젝트 팔레트(Object Palette)를 통해 제공합니다. 
* 팔레트에서 객체를 선택하면 중앙(Canvas Area)에 선택된 객체가 표시되고, 이를 더블클릭하여 나타나는 퍼로퍼티 창에서 속성값을 설정합니다.   
* 객체의 속성정보는 사용자가 직접 정의하거나, 관련있는 객체들간의 관계 설정(Relation)을 통해 자동 주입할 수 있습니다.
* 정의된 객체에 대해, 도구 하단(Terminal Area)에 출력되는 명령어 콘솔창에서 쿠버네티스 CLI 커멘드 명령어를 확인할 수 있다. (학습기능)
* 도구는 퍼블릭 클라우드(e.g. GCP, AWS, Azure, NCP) 연계을 위한 관리기능을 제공합니다. 
* 완료된 다이어그램은 등록된 클라우드와 연결하여 온라인 배포할 수 있으며, YAML화일 형식, 또는 Helm Chart기반으로 아카이브 파일을 다운로드할 수 있습니다.    
* 클라우드에 배포된 객체의 실행정보를 받아와 상태정보를 인지할 수 있는 모니터링 기능을 제공합니다.  

<br/>

<h3>실행환경 및 서비스 유형</h3>

* Kuber-Ez는 Chrome Brower에 최적화되어 있습니다.(최신 버전 권장)
* 모든 운영체제(Windows, Linux, Mac)를 지원하며, 최소 512MB 이상의 메모리 필요
* On-Premise 버전 및 SaaS 기반의 서비스를 제공합니다. [[How to install Kuber-Ez]](https://github.com/uengine-oss/kuber-ez/wiki/1.Installation)

<br/>

<h3>장점 및 기대효과</h3>
* 한국인정기구 KOLAS 인정시험 통과
* YAML 및 CLI 명령어에 익숙하지 않은 사용자도 쉽게 사용할 수 있는 UI/UX를 제공합니다.  
* 객체별 실행 명령어(kubectl) 확인, 생성된 YAML 미리보기, 다양한 유형별 YAML 다운로드를 통한 학습 기회를 제공합니다. 
* 쿠버네티스에 익숙한 사용자에게도 도구를 통해, 데브옵스 프로세스의 리드 타임(Lead time)을 단축시켜 줍니다.
* 다양한 교육 및 MSA 프로젝트 현장에서의 활용으로 클라우드 산업 활성화 지원 

<br/>

<h3>주문/상품/배송 서비스를 시나리오로 한 KuberEz 전,후 비교 영상</h3>

[<img src="https://user-images.githubusercontent.com/35618409/96990423-0e8c8300-1562-11eb-9430-d6aec52ead7d.png" width="80%">](https://youtu.be/Mu66BMFIM-E)

<br/>


## Installation

<h3>Video</h3>

https://youtu.be/A6TeVs_yWa8

<h3>1. Standalone Mode</h3>

If you want to use the KuberEz for simply drawing models and generating Yaml, you only need to run front-end server

```
npm install
npm run serve
```
or
```
docker run --name="kuberEz" -p 8081:8080 -d ohsy818/kuber-ez
```


<h3>실행 화면 (localhost:8081 접속)</h3>

![image](https://user-images.githubusercontent.com/48265118/92222813-8501f280-eeda-11ea-9c0b-9b6c6d6ce45f.png)


<h3>2. Full-fledged Mode</h3>

If you want to use KuberEz for managing your clusters, you have to run all the components of KuberEz in a Kubernetes cluster

1. ingress-nginx-controller 배포
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/cloud/deploy.yaml
```

2. 배포된 ingress-nginx-controller 서비스의 IP를 확인합니다.
```
kubectl get svc -n ingress-nginx
# NAME                                 TYPE           CLUSTER-IP     EXTERNAL-IP      PORT(S)                      AGE
# ingress-nginx-controller             LoadBalancer   10.108.2.110   35.225.135.251   80:30474/TCP,443:30907/TCP   16m
```

3. KuberEz, API-Server, Webkubectl 배포
```
kubectl create -f https://raw.githubusercontent.com/uengine-oss/kuber-ez/master/kubernetes/deploy.yaml
```

4. kuberez Ingress의 ADDRESS가 할당되었는지 확인합니다.
```
kubectl get ingress -n kuber-ez
# NAME      HOSTS                       ADDRESS          PORTS   AGE
# kuberez   kuberez.io,api.kuberez.io   35.225.135.251   80      39m
```

5. Hosts와 Ingress ADDRESS가 포워딩 되도록 hosts 파일을 수정합니다.
```
(e.g.)
35.225.135.251   kuberez.io   api.kuberez.io
```

<h3>실행 화면(kuberez.io 접속)</h3>

![image](https://user-images.githubusercontent.com/48265118/92230281-d368be80-eee5-11ea-90f9-295a246ede69.png)


## Quick Tour

<h3>Video</h3>

https://youtu.be/WFmcsJpvtKw


<h3>화면 구성</h3>

<img src="https://user-images.githubusercontent.com/48265118/92880687-3d82e580-f449-11ea-81cf-e5a2c00ac6f1.png" width="80%">

***

<h3>1. 팔레트 영역</h3>

Kubernetes 오브젝트 팔레트 영역으로 쿠버네티스 객체 목록을 그룹화하여 각 카테고리별로 나눠져 있습니다.

<h3>오브젝트 팔레트</h3>

| 카테고리 | 오브젝트 | 설명 |
|:-------:|:-------:|:----:|
| Workload | Namespace<br/>Deployment<br/>ReplicaSet<br/>Pod<br/>StatefulSet<br/>DaemonSet | 쿠버네티스의 기본 Object와<br/>Desired State를 유지하기 위한<br/>컨트롤러 객체들의 집합 |
| Routing | Service<br/>Ingress | Workload 객체을 외부에서<br/>접근할 수 있도록 서비스하는 객체 |
| Persistence | PersistentVolume<br/>PersistentVolumeClaim<br/>StorageClass | 쿠버네티스 스토리지를 관리하기<br/>위한 볼륨 리소스 집합 |
| Autosalcer | HorizontalPodAutoscaler | CPU, 메모리의 사용량을 관찰하여<br/>리소스의 파드 개수를<br/>자동으로 스케일하는 객체 |
| Job | Job<br/>CronJob | 지정된 수의 파드가 성공적으로<br/>실행되어 종료되도록 하는<br/>컨트롤러 객체들의 집합 |
| Configuration | ConfigMap<br/>Secret | 다른 객체가 사용할 데이터를<br/>저장하는 객체들의 집합 |
| Role Based Access Control<br/>(RBAC) | Role<br/>RoleBinding<br/>ClusterRole<br/>ClusterRoleBinding<br/>ServiceAccount | 사용자의 역할을 기반으로<br/>쿠버네티스 시스템의 권한을<br/>관리하는 객체들의 집합 |
| Istio | Gateway<br/>VirtualService<br/>DestinationRule<br/>ServiceEntry<br/>Sidecar<br/>Quota<br/>Rule<br/>QuotaSpec<br/>QuotaSpecBinding<br/>MemQuota |  |
| Knative | Service |  |
| Argo | Workflow |  |

***


<br/>

<h3>2. 메뉴 영역</h3>

우측 상단에 표시되는 클러스터 연결 및 배포, 생성된 YAML 코드의 관리를 위한 기능으로 상세 설명은 다음과 같습니다.

1) Manage Clusters : 사용자의 클러스터를 등록 및 삭제할 수 있으며 등록된 클러스터를 클릭하여 사용할 클러스터를 선택할 수 있습니다.

톱니바퀴 버튼 클릭시 호출되는 Manage Clusters 화면
<img src="https://user-images.githubusercontent.com/48265118/92886553-b46ead00-f44e-11ea-9f67-43acc739dc59.png" width="70%">

+버튼을 클릭하여 이름, 클러스터의 API Server, token을 입력하여 저장하면 화면에 입력한 클러스터 정보가 등록됩니다. 사용할 클러스터는 등록된 클러스터를 클릭하여 선택합니다.
<p>
<img src="https://user-images.githubusercontent.com/48265118/92888387-3ad7be80-f450-11ea-9fd7-bfa52fa5a776.png">
<img src="https://user-images.githubusercontent.com/48265118/93038390-d00cca00-f67f-11ea-8891-bd38b550c1d2.png">
</p>


2) Deploy : 캔버스에 모델링된 객체를 서버에 배포해주는 버튼으로 사용자가 선택한 클러스터가 있는 경우 사용할 수 있습니다.

Deploy 버튼 클릭시 나오는 팝업창. 배포할 클러스터 정보를 확인하고 Deploy 버튼을 누르면 캔버스에 모델링된 객체들이 배포됩니다.
<img src="https://user-images.githubusercontent.com/48265118/93038974-5249be00-f681-11ea-82f7-2d6db2ada4b0.png">

3) Code Preview : Code Preview, Download Archive 두가지 메뉴가 있으며 Code Preview 클릭시 캔버스에 모델링한 객체의 Yaml 파일을 Template에 따라 미리볼 수 있습니다. Download Archive 클릭시 선택한 Template에 따른 Yaml 파일이 다운로드 됩니다.

Code Preview를 클릭하여 Template에서 Separate File per kind를 선택한 화면
<img src="https://user-images.githubusercontent.com/48265118/93039528-b456f300-f682-11ea-93bd-bc7337a55ec1.png" width="70%">

원하는 Template별로 모델링 객체의 Yaml을 확인할 수 있습니다.
<img src="https://user-images.githubusercontent.com/48265118/93039704-2596a600-f683-11ea-9b6b-becc8bc6fa07.png">

Download Archive를 클릭하여 호출된 팝업창. 원하는 Template을 골라 Yaml 파일을 다운로드 할 수 있습니다.
<img src="https://user-images.githubusercontent.com/48265118/93040235-78bd2880-f684-11ea-9222-90d82f82cb71.png">
<img src="https://user-images.githubusercontent.com/48265118/93040379-d6ea0b80-f684-11ea-9874-6dc782d6dc81.png">


***

<br/>

<h3>3. 커맨드 영역</h3>

Kubernetes CLI 명령어를 출력하는 Shell 영역으로 캔버스 상에 객체를 정의하고, 객체의 컨텍스트 메뉴에서 명령어를 클릭시 Shell 영역에 해당 커맨드가 출력됩니다.<br>
**오브젝트의 context menu에서 터미널 오픈**
<P>
<img src="https://user-images.githubusercontent.com/48265118/92882374-d5cd9a00-f44a-11ea-853b-939a6b3ebec9.png">
<img src="https://user-images.githubusercontent.com/48265118/92883382-c26efe80-f44b-11ea-9dda-f613001e2d05.png" width="60%">
<p>

<h3>메뉴를 통한 kubectl get deployment 명령어 호출</h3>

<p>
<img src="https://user-images.githubusercontent.com/48265118/92884423-cc453180-f44c-11ea-8695-8d8df1566bc9.png">
<img src="https://user-images.githubusercontent.com/48265118/92884449-d109e580-f44c-11ea-86d3-49a2ab456729.png">
<p>

***

<br/>

<h3>4. 캔버스 영역</h3>
오브젝트 팔레트에서 선택한 객체가 구현되는 영역으로 오브젝트를 더블클릭시,<br>
해당 객체의 프로퍼티를 수정할 수 있는 편집창이 나와 추가적인 정의를 할 수 있습니다.

**UI 편집창을 통한 프로퍼티 정의**
<img src="https://user-images.githubusercontent.com/48265118/92881114-a5393080-f449-11ea-9433-6526941ab124.png">


## How to use Kuber-Ez

<h3>Kuber-Ez 사용법<h3> 

**Kuber-Ez 도구를 활용하여 시나리오 기반(Scenario-based)의 다이어그래밍 작성법을 소개합니다.** 

 > - 주문서비스, 상품서비스, 배송서비스로 구성된 쇼핑몰(12st Mall)을 시나리오 도메인으로 가정합니다. [(상세정보)](http://msaschool.io/#/%EC%86%8C%EA%B0%9C/02_%EC%98%88%EC%A0%9C%20%EB%8F%84%EB%A9%94%EC%9D%B8) <br/>
 > - Cloud 환경은 GCP(Google Cloud Platform), AWS, Azure 등 Public Cloud 중 하나를 선정합니다. <br/>
 > - 시나리오에 사용된 각 마이크로서비스별 도커 이미지 정보는 다음과 같으며, Docker Hub에 존재합니다.
   >> 주문서비스 : apexacme/order:latest<br/>
   >> 상품서비스 : apexacme/product:latest<br/>
   >> 배송서비스 : apexacme/delivery:latest
<br/>

**12st Mall의 테스트 시나리오별 Kuber-Ez 사용법은 아래와 같습니다.**

 * [쿠버네티스 Cluster API 서버 및 토큰(Token)정보 확인하기](https://github.com/uengine-oss/kuber-ez/wiki/Cluster-Information)
   - Setting K8S Cluster API-Server, Token

 * [Test Case #1. 주문/상품/배송의 각 마이크로서비스를 배포하고 서비스를 생성합니다.](https://github.com/uengine-oss/kuber-ez/wiki/Cluster-Management,-Deployment,-Service-Object)
   - K8s Object: Cluster Management, Deployment, Service Object

 * [Test Case #2. API Gateway를 통해, 12st Mall의 서비스가 라우팅되도록 설정합니다.](https://github.com/uengine-oss/kuber-ez/wiki/Ingress-Service-Routing)
   - K8s Object: Ingress Gateway
    
 * [Test Case #3. 주요 서비스(주문/상품)에 대해 사용자 요청이 쇄도할 것을 고려, 자동으로 서비스가 확장되도록 설정합니다.](https://github.com/uengine-oss/kuber-ez/wiki/AutoScaler-Object)
   - K8s Object: HPA(Horizontal Pod Autoscaler)

 * [Test Case #4. 상품 서비스에서는 상품 이미지를 저장하기 위해 파일 스토리지를 추가로 활용합니다.](https://github.com/uengine-oss/kuber-ez/wiki/Volume-Object)
   - K8s Object: Volume, PersistentVolumeClaim

 * [Test Case #5. 배송 서비스에서는 어플리케이션에서 관리하던 물류회사의 API 정보를 클러스터 환경변수 객체에 저장하고 관리합니다.](https://github.com/uengine-oss/kuber-ez/wiki/ConfigMap-Object)
   - K8s Object: ConfigMap

 * [Test Case #6. 보다 효율적인 서비스 관리를 위해, 서비스 메시 도구인 이스티오(Istio)를 도입하고 Istio가 제공하는 Gateway를 통한 서비스로 전환합니다.](https://github.com/uengine-oss/kuber-ez/wiki/Istio-Gateway,-VirtualService)
   - K8s Object: Istio Gateway, VirtualService

 * [Test Case #7. 상품 서비스에 장애 발생시, 장애전파를 사전 차단하기 위해, Istio의 Circuit Breaker를 적용하여 서비스의 Resilency를 높이는 전략을 적용합니다.](https://github.com/uengine-oss/kuber-ez/wiki/Istio-DestinationRule)
   - K8s Object: DestinationRule

 * [Test Case #8. 완료된 디플로이 다이어그래밍을 Helm 차트로 생성하고, 이를 통해 쿠버네티스에 배포합니다.](https://github.com/uengine-oss/kuber-ez/wiki/Helm-Chart)
   - Helm Chart
<br/>

### ·	Cluster Information

<h3>Kubernetes API 서버 및 Token 정보 획득하기</h3>
<hr/>

**0-1. 쿠버네티스 클러스터 서버 정보 확인**
**0-1-1. kubectl config view 명령어를 통해 클러스터의 API 주소를 확인합니다.**
<img src="https://user-images.githubusercontent.com/48265118/97250077-813e7c80-1848-11eb-8f6e-1252c207c97a.png">

 > - 터미널 창을 오픈합니다. (로컬 minikube를 사용한다면 cmd, GCP를 사용한다면 SDK)
 > - kubectl config view 명령어 입력 후 cluster의 server를 확인합니다.

**0-1-2. ServiceAccount를 생성하고 권한을 부여하여 Token 값을 확인합니다.**
<img src="https://user-images.githubusercontent.com/48265118/97251171-b3e97480-184a-11eb-8563-4134e1bcc594.png" width="80%">
<img src="https://user-images.githubusercontent.com/48265118/97252360-24919080-184d-11eb-9457-37f3d7dde79b.png">
<img src="https://user-images.githubusercontent.com/48265118/97252367-26f3ea80-184d-11eb-9f0d-1e6c328bfcac.png" width="80%">

 > - 다음 명령어를 입력하여 Token 값을 얻어냅니다.
 > - kubectl create sa <<유저명>>
 > - kubectl create clusterrolebinding cluster-admin-binding --clusterrole=cluster-admin --serviceaccount=default:<<유저명>>
 > - kubectl describe sa <<유저명>>
 > - kubectl describe secret <얻어낸 Tokens: e.g. test-token-wq7vq>

**0-1-3. 확인한 API-Server 정보와 Token 값은 Manage Clusters에서 사용할 클러스터로 등록합니다.**
<img src="https://user-images.githubusercontent.com/48265118/97257744-231a9500-185a-11eb-9eff-5735a34187b5.png" width="70%">

<br/>

### ·	Cluster Management, Deployment, Service Object

<h3>Test Case #1. 주문/상품/배송의 각 마이크로서비스를 배포하고 서비스를 생성합니다.</h3>
<hr/>

<h3>1-1. 쿠버네티스 클러스터 정보 설정</h3>
<h3>1-1-1. 메뉴 영역에서 클러스터 관리 버튼을 클릭합니다.</h3>
<img src="https://user-images.githubusercontent.com/48265118/93052167-96988680-f6a0-11ea-9401-bf6aba209b53.png" width="50%">

<h3>1-1-2. +버튼을 클릭해 나오는 팝업창에 클러스터 이름, API Server, Token 정보를 입력하여 등록합니다.</h3>
<h3>클러스터의 API-Server, Token 정보를 얻는 방법은 [쿠버네티스 API서버 및 토큰(Token)정보 획득하기](https://github.com/uengine-oss/kuber-ez/wiki/Cluster-Information) 페이지에서 확인합니다.</h3>
<img src="https://user-images.githubusercontent.com/48265118/93052175-97c9b380-f6a0-11ea-97d6-c9d00f720797.png" width="70%">

<h3>1-1-3. 등록된 클러스터를 확인하고 클릭하여 캔버스의 클러스터 관리 버튼에 사용할 클러스터가 표시되었는지 확인합니다.</h3>
<p>
<img src="https://user-images.githubusercontent.com/48265118/93052177-97c9b380-f6a0-11ea-9535-1c778e33c46c.png" width="40%">
<img src="https://user-images.githubusercontent.com/48265118/93053800-51c21f00-f6a3-11ea-873d-8effbe1f98f7.png" width="40%">
</p>
<br/>

<h3>1-2. Deployment 객체 생성</h3>
<h3>1-2-1. 오브젝트 팔레트에서 Workload의 Deployment 객체를 선택합니다. (주문/상품/배송용 Deployment 3개 생성)</h3>
<img src="https://user-images.githubusercontent.com/48265118/93057137-681ea980-f6a8-11ea-9f63-ee56db1e7fb6.png">

 > - Workload에 마우스를 hover하였을 때 나타난 객체들 중 Deployment를 클릭합니다.

<h3>1-2-2. 캔버스에 그려진 Deployment 객체의 프로퍼티를 정의합니다.</h3>
<img src="https://user-images.githubusercontent.com/48265118/93057142-69e86d00-f6a8-11ea-9d62-0906523e911f.png" width="70%">

 > - Deployment 객체를 더블클릭하여 프로퍼티 편집창을 호출합니다.
 > - 각 프로퍼티값은 다음과 같이 입력합니다.
   >> Name: order<br/>
   >> Replicas: 3<br/>
   >> Image: apexacme/order:latest<br/>
   >> Target Port: 8080<br/><hr/>
   >> Name: product<br/>
   >> Replicas: 3<br/>
   >> Image: apexacme/product:latest<br/>
   >> Target Port: 8080<br/><hr/>
   >> Name: delivery<br/>
   >> Replicas: 3<br/>
   >> Image: apexacme/delivery:latest<br/>
   >> Target Port: 8080<br/>
<br/>

<h3>1-3. Service 객체 생성/ 연관설정</h3>
<h3>1-3-1. 오브젝트 팔레트에서 Routing의 Service 객체를 선택합니다.</h3>
<img src="https://user-images.githubusercontent.com/48265118/93062671-3c9fbd00-f6b0-11ea-9503-962fb19554a9.png">

 > - Routing에 마우스를 hover하였을 때 나타난 객체들 중 Service를 클릭합니다.

<h3>1-3-2. 캔버스에 그려진 Service 객체를 Deployment 객체와 연결합니다.</h3>
<p>
<img src="https://user-images.githubusercontent.com/48265118/93062910-81c3ef00-f6b0-11ea-9d4c-33ebe02e0d3c.png">
<img src="https://user-images.githubusercontent.com/48265118/93168754-95c62a00-f75e-11ea-9c2f-fda3539a0ac1.png">
<img src="https://user-images.githubusercontent.com/48265118/93153524-69011b00-f73c-11ea-8fe2-cf5bc91be923.png">
</p>

> - Service 객체를 클릭하여 ↗ 화살표 버튼을 클릭합니다.
> - 연결 점선이 나타나면 Deployment 객체를 클릭합니다.
> - 화살표 방향이 Deployment를 향한 연결 실선이 나타났는지 확인합니다.

<h3>1-3-3. Service 객체의 프로퍼티를 정의합니다.</h3>
<img src="https://user-images.githubusercontent.com/48265118/93168748-9363d000-f75e-11ea-8b62-1db3c02af903.png" width="70%">

 > - Service 객체를 더블클릭하여 프로퍼티 편집창을 호출합니다.
 > - 각 프로퍼티값은 다음과 같이 입력합니다. (App Name과 Target Port는 연결된 Deployment 객체의 이름과 port로 입력됩니다.)
   >> Name: order-svc<br/>
   >> Port: 8080<br/>
   >> Type: ClusterIP<br/><hr/>
   >> Name: product-svc<br/>
   >> Port: 8080<br/>
   >> Type: ClusterIP<br/><hr/>
   >> Name: delivery-svc<br/>
   >> Port: 8080<br/>
   >> Type: ClusterIP<br/>
<br/>

<h3>1-4. Yaml 확인 및 클라우드 배포</h3>
<h3>1-4-1. 메뉴 영역에서 Code 버튼의 Code Preview 클릭하여 Template을 선택합니다.</h3>
<img src="https://user-images.githubusercontent.com/48265118/93284037-be0c6200-f80c-11ea-960b-2d9ecfc949d5.png" width="40%">
<img src="https://user-images.githubusercontent.com/48265118/93301288-3554ec80-f833-11ea-96b3-031ae78d071a.png" width="40%">

 > - Template은 Separate File, Single File, Separate File per kind, Helm으로 4가지이며 기본값은 Separate File per kind입니다.
 > - Separate File은 각 객체의 Yaml을 확인할 수 있습니다.
 > - Single File은 모든 객체를 하나의 Yaml에서 확인 할 수 있습니다.
 > - Separate File per kind은 객체의 kind별로 Yaml을 확인할 수 있습니다.
 > - Helm은 Helm Chart 구조로 객체의 Yaml을 확인할 수 있습니다.

<h3>1-4-2. 모델링 객체의 Yaml을 확인합니다.</h3>
<p>
<img src="https://user-images.githubusercontent.com/48265118/93548410-204a9b80-f9a2-11ea-9a7d-7f10e650f944.png" width="40%">
<img src="https://user-images.githubusercontent.com/48265118/93558974-90b0e700-f9b9-11ea-9bde-983faf138738.png" width="40%">
</p>

 > - Yaml과 프로퍼티 편집창에서 설정한 값이 맞는지 확인합니다.

<h3>1-4-3. 메뉴 영역에서 Deploy 버튼을 클릭합니다.</h3>
<p>
<img src="https://user-images.githubusercontent.com/48265118/93176247-f740c580-f76b-11ea-8060-7502a767a40f.png" width="40%">
<img src="https://user-images.githubusercontent.com/48265118/93176521-59012f80-f76c-11ea-84bb-447cba4ee358.png" width="30%">
</p>

 > - 클러스터 관리에서 설정한 클러스터 정보와 일치하는지 확인하고 Deploy를 클릭하여 서버에 배포합니다.

<h3>1-4-4. Deployment 객체가 정상적으로 배포되었는지 확인합니다.</h3>
<p>
<img src="https://user-images.githubusercontent.com/48265118/93546136-225e2b80-f99d-11ea-9081-d3af1e977e8f.png" width="40%">
<img src="https://user-images.githubusercontent.com/48265118/93546138-24c08580-f99d-11ea-8425-9d9505c49515.png" width="40%">
</p>

 > - 배포된 Deployment 객체에 availableReplicas/Replicas 표시가 나타났는지 확인합니다.
 > - Deployment의 replicas가 프로퍼티창에서 설정한 만큼 모두 사용 가능해졌는지 확인합니다.
<br/>

<h3>1-5. kubectl CLI</h3>
<h3>1-5-1. 모델링 객체의 Context Menu에서 Terminal Open을 클릭합니다.</h3>
<p>
<img src="https://user-images.githubusercontent.com/48265118/93546505-d95aa700-f99d-11ea-95ab-3fc513d8efff.png" width="40%">
<img src="https://user-images.githubusercontent.com/48265118/93312538-4b1dde00-f842-11ea-8ec3-3a4cdaf0efdd.png" width="40%">
</p>

> - 객체의 + 버튼을 클릭하거 우클릭하여 나오는 Context Menu에서 Teminal Open 선택합니다.
> - 화면 하단에 Shell 영역이 정상적으로 호출되는지 확인합니다.

<h3>1-5-2. 화면 하단의 Shell 영역에서 kubectl get deploy, kubectl get svc 명령어로 배포를 확인합니다.</h3>
<p>
<img src="https://user-images.githubusercontent.com/48265118/93546826-a7961000-f99e-11ea-9fed-09efaf4f347d.png" width="40%">
<img src="https://user-images.githubusercontent.com/48265118/93546858-b977b300-f99e-11ea-83d0-4d13c4e7ef55.png" width="40%">
</p>

 > - kubectl get deploy -n default 명령어 입력 후 모든 Deployment 객체가 정상적으로 배포되었는지 확인합니다.
 > - kubectl get svc -n default 명령어 입력 후 모든 Service 객체가 정상적으로 배포되었는지 확인합니다.

<br/>


### ·	Ingress Service Routing

**Test Case #2. API Gateway를 통해, 12st Mall의 서비스가 라우팅되도록 설정합니다.**
<hr/><br/>

**2-1. API Gateway 생성 및 설정**<br>
**2-1-1. 오브젝트 팔레트에서 Routing의 Ingress 객체를 선택합니다.**
<img src="https://user-images.githubusercontent.com/48265118/93407446-2f134e80-f8cd-11ea-909b-ce7bb66ecfbb.png" width="60%">

 > - Routing에 마우스를 hover하였을 때 나타난 객체들 중 Ingress를 클릭합니다.

**2-1-2. 캔버스에 그려진 Ingress 객체의 프로퍼티를 정의합니다.**
<img src="https://user-images.githubusercontent.com/48265118/93408700-240ded80-f8d0-11ea-8975-38353cf7d8d2.png" width="70%">

 > - Ingress 객체를 더블클릭하여 프로퍼티 편집창을 호출합니다.
 > - 각 프로퍼티값은 다음과 같이 입력합니다.
   >> Name: api-gateway<br/>
<br/>

**2-2. API Gateway와 서비스 연결**<br>
**2-2-1. 캔버스에 그려진 Ingress 객체를 Service 객체와 연결합니다.**
<p>
<img src="https://user-images.githubusercontent.com/48265118/93409403-cbd7eb00-f8d1-11ea-8016-61226a70a568.png" width="40%">
<img src="https://user-images.githubusercontent.com/48265118/93409413-ced2db80-f8d1-11ea-8946-e45257577206.png" width="40%">
</p>

> - Ingress 객체를 클릭하여 ↗ 화살표 버튼을 클릭합니다.
> - 연결 점선이 나타나면 Service 객체를 클릭합니다.
> - 화살표 방향이 Service를 향한 연결 실선이 나타났는지 확인합니다.

**2-2-2. 요청 패스 기반으로 서비스가 분기되도록 설정합니다.**
<img src="https://user-images.githubusercontent.com/48265118/93409415-ced2db80-f8d1-11ea-9ccc-add3ff1f98e5.png" width="70%">

> - Ingress와 Service의 연결선을 더블클릭하여 연결 프로퍼티 편집창을 호출합니다.
> - 각 연결선의 Service Path는 다음과 같이 입력합니다.
   >> Service Path: /orders<br/><hr/>
   >> Service Path: /products<br/><hr/>
   >> Service Path: /deliveries<br/>
<br/>

**2-3. Yaml 확인 및 클라우드 배포**<br>
**2-3-1. Code Preview에 들어가 객체의 Yaml을 확인합니다.**
<p>
<img src="https://user-images.githubusercontent.com/48265118/93413383-21b09100-f8da-11ea-8351-3e814f6e4d2b.png" width="30%">
<img src="https://user-images.githubusercontent.com/48265118/93414573-8a007200-f8dc-11ea-8eb4-06ef5ab07e6f.png" width="50%">
</p>

 > - Yaml과 프로퍼티 편집창에서 설정한 값이 맞는지 확인합니다.

**2-3-2. 메뉴 영역에서 Deploy 버튼을 클릭하여 객체를 배포합니다.**
<p>
<img src="https://user-images.githubusercontent.com/48265118/93413385-22492780-f8da-11ea-8c44-34605e630f44.png" width="40%">
<img src="https://user-images.githubusercontent.com/48265118/93413386-22e1be00-f8da-11ea-9a3a-09d9ccd469fb.png" width="30%">
</p>

 > - 배포 전 클러스터 정보를 확인하고 Deploy를 클릭합니다.
<br/>

**2-4. kubectl CLI**<br>
**2-4-1. Shell 영역에서 kubectl get ing 명령어로 배포를 확인합니다.**
<img src="https://user-images.githubusercontent.com/48265118/93414876-33dffe80-f8dd-11ea-95a6-f1079298e9f5.png" width="70%">

 > - kubectl get ingress -n default 명령어 입력 후 Ingress 객체가 정상적으로 배포되었는지 확인합니다.

<br/><br/>


### ·	AutoScaler Object

**Test Case #3. 주요 서비스(주문/상품)에 대해 사용자 요청이 쇄도할 것을 고려, 자동으로 서비스가 확장되도록 설정합니다.**
<hr/><br/>

<h4>3-1. HPA(Horizontal Pod AutoScaler) 설정</h4>

**3-1-1. 오브젝트 팔레트에서 AutoScaler의 HPA(Horizontal Pod AutoScaler) 객체를 선택합니다.**
<img src="https://user-images.githubusercontent.com/48265118/93428614-c04cea00-f8fa-11ea-90fb-34985f068325.png" width="60%">

 > - AutoScaler에 마우스를 hover하였을 때 나타난 객체들 중 HPA(Horizontal Pod AutoScaler)를 클릭합니다.

**3-1-2. 캔버스에 그려진 HPA(Horizontal Pod AutoScaler) 객체의 프로퍼티를 정의합니다.**
<img src="https://user-images.githubusercontent.com/48265118/93550751-111a1c80-f9a7-11ea-997b-29c262e74731.png" width="70%">

 > - HPA(Horizontal Pod AutoScaler) 객체를 더블클릭하여 프로퍼티 편집창을 호출합니다.
 > - 각 프로퍼티값은 다음과 같이 입력합니다.
   >> Name: order-hpa<br/>
   >> MinReplicas: 2<br/>
   >> MaxReplicas: 10<br/>
   >> Resource Type: cpu <br/>
   >> AverageUtilization: 50<br/><hr/>
   >> Name: product-hpa<br/>
   >> MinReplicas: 2<br/>
   >> MaxReplicas: 10<br/>
   >> Resource Type: cpu <br/>
   >> AverageUtilization: 50<br/>
<br/>
<h4>3-2. ScaleTarget 설정</h4>

**3-2-1. 캔버스에 그려진 HPA(Horizontal Pod AutoScaler) 객체의 스케일 타겟을 설정합니다.**
<img src="https://user-images.githubusercontent.com/48265118/93551027-c220b700-f9a7-11ea-951f-5427d07f378a.png" width="70%">

 > - HPA 객체를 클릭하여 ↗ 화살표 버튼을 클릭합니다.
 > - 연결 점선이 나타나면 Deployment 객체를 클릭합니다.
 > - 화살표 방향이 Deployment를 향한 연결 실선이 나타났는지 확인합니다.
 > - HPA 객체를 더블클릭하여 spec.scaleTargetRef에 Deployment 객체가 있는지 확인합니다.
<br/>

<h4>3-3. Yaml 확인 및 클라우드 배포</h4>

**3-3-1. Code Preview에 들어가 객체의 Yaml을 확인합니다.**
<p>
<img src="https://user-images.githubusercontent.com/48265118/93413383-21b09100-f8da-11ea-8351-3e814f6e4d2b.png" width="30%">
<img src="https://user-images.githubusercontent.com/48265118/93551370-a2d65980-f9a8-11ea-9254-6b0914dc9be0.png" width="50%">
</p>

 > - Yaml과 프로퍼티 편집창에서 설정한 값이 맞는지 확인합니다.

**3-3-2. 메뉴 영역에서 Deploy 버튼을 클릭하여 객체를 배포합니다.**
<p>
<img src="https://user-images.githubusercontent.com/48265118/93413385-22492780-f8da-11ea-8c44-34605e630f44.png" width="40%">
<img src="https://user-images.githubusercontent.com/48265118/93413386-22e1be00-f8da-11ea-9a3a-09d9ccd469fb.png" width="30%">
</p>

 > - 배포 전 클러스터 정보를 확인합니다.
<br/>

**3-4. kubectl CLI**
**3-4-1. Shell 영역에서 kubectl get hpa 명령어로 배포를 확인합니다.**
<img src="https://user-images.githubusercontent.com/48265118/93559108-e7b6bc00-f9b9-11ea-8b1e-ba5d5d2ca28f.png" width="70%">

 > - kubectl get hpa -n default명령어 입력 후 HPA 객체가 정상적으로 배포되었는지 확인합니다.

<br/><br/>


### ·	Volume Object

<h4>Test Case #4. 상품 서비스에서는 상품 이미지를 저장하기 위해 파일 스토리지를 추가로 활용합니다.</h4>
<hr/><br/>

<h4>4-1. PersistentVolumeClaim 설정</h4>

**4-1-1. 오브젝트 팔레트에서 Persistence의 PersistentVolume, PersistentVolumeClaim 객체를 선택합니다.**
<img src="https://user-images.githubusercontent.com/48265118/93436875-50dcf780-f906-11ea-933d-18b83bde875d.png" width="70%">

**4-1-2. 캔버스에 그려진 PV(PersistentVolume), PVC(PersistentVolumeClaim) 객체의 프로퍼티를 정의합니다.**
<img src="https://user-images.githubusercontent.com/48265118/93556309-6bb97580-f9b3-11ea-8fab-bcdc70e58cd2.png" width="70%">
<img src="https://user-images.githubusercontent.com/48265118/93556312-6ceaa280-f9b3-11ea-9872-9bc1a997f169.png" width="70%">

 > - PersistentVolume, PersistentVolumeClaim 객체를 더블클릭하여 프로퍼티 편집창을 호출합니다.
 > - 각 프로퍼티 값은 다음과 같이 입력합니다.
   >> Name: product-pv<br/>
   >> AccessModes: ReadOnlyMany<br/>
   >> Storage: 10Gi<br/>
   >> ReclaimPolicy: Recycle<br/>
   >> VolumeMode: Filesystem<br/><hr/>
   >> Name: product-pvc<br/>
   >> AccessModes: ReadOnlyMany<br/>
   >> Storage: 10<br/>
   >> VolumeMode: Filesystem<br/>

**4-1-3.  PV(PersistentVolume)와 PVC(PersistentVolumeClaim)을 연결합니다.**
<img src="https://user-images.githubusercontent.com/48265118/93439297-55ef7600-f909-11ea-86b1-2b189f87bfd4.png" width="70%">

 > - PVC(PersistentVolumeClaim) 객체를 클릭하여 ↗ 화살표 버튼을 클릭합니다.
 > - 연결 점선이 나타나면 PV(PersistentVolume) 객체를 클릭합니다.
 > - 연결선이 생기면 PVC 객체를 더블클릭하여 volumeName에 PV 객체의 Name이 있는지 확인합니다.

<br/>

<h4>4-2. Deployment에 Volume 설정</h4>

**4-2-1. Product Deployment 객체와 Product PVC 객체를 연결하여 Volume을 설정합니다.**
<img src="https://user-images.githubusercontent.com/48265118/93439932-1b3a0d80-f90a-11ea-8af4-32095654c677.png" width="70%">

 > - product Deployment 객체를 클릭하여 ↗ 화살표 버튼을 클릭합니다.
 > - 연결 점선이 나타나면 product-pvc 객체를 클릭합니다.
 > - 연결선이 생기면 Deployment 객체를 더블클릭하여 spec.volumes에 PVC 객체가 있는지 확인합니다.

<br/>

<h4>4-3. Yaml 확인 및 클라우드 배포</h4>

**4-3-1. Code Preview에 들어가 객체의 Yaml을 확인합니다.**
<img src="https://user-images.githubusercontent.com/48265118/93413383-21b09100-f8da-11ea-8351-3e814f6e4d2b.png" width="50%">
<p>
<img src="https://user-images.githubusercontent.com/48265118/93558573-b12c7180-f9b8-11ea-88b7-873a57d2cc7f.png" width="40%">
<img src="https://user-images.githubusercontent.com/48265118/93558574-b25d9e80-f9b8-11ea-82fc-bfb36439dac4.png" width="40%">
</p>

 > - Yaml과 프로퍼티 편집창에서 설정한 값이 맞는지 확인합니다.

**4-3-2. 메뉴 영역에서 Deploy 버튼을 클릭하여 객체를 배포합니다.**
<p>
<img src="https://user-images.githubusercontent.com/48265118/93413385-22492780-f8da-11ea-8c44-34605e630f44.png" width="40%">
<img src="https://user-images.githubusercontent.com/48265118/93413386-22e1be00-f8da-11ea-9a3a-09d9ccd469fb.png" width="30%">
</p>

 > - 배포 전 클러스터 정보를 확인합니다.
<br/>

<h4>4-4. kubectl CLI</h4>

**4-4-1. Shell 영역에서 kubectl get pv, kubectl get pvc 명령어로 배포를 확인합니다.**
<p>
<img src="https://user-images.githubusercontent.com/48265118/93559385-94913900-f9ba-11ea-8b0d-8757f7ea1f52.png" width="80%">
<img src="https://user-images.githubusercontent.com/48265118/93559257-41b78180-f9ba-11ea-8e30-5a8bd51bc87d.png" width="70%">
</p>

 > - kubectl get pv 명령어 입력 후 PV 객체가 정상적으로 배포되었는지 확인합니다.
 > - kubectl get pvc 명령어 입력 후 PVC 객체가 정상적으로 배포되었는지 확인합니다.

<br/><br/>


### ·	ConfigMap Object

<h4>Test Case #5. 배송 서비스에서는 어플리케이션에서 관리하던 물류회사의 API 정보를 클러스터 환경변수 객체에 저장하고 관리합니다.</h4>
<hr/><br/>

<h4>5-1. ConfigMap 설정</h4>

**5-1-1. 오브젝트 팔레트에서 Configuration의 ConfigMap 객체를 선택합니다.**
<img src="https://user-images.githubusercontent.com/48265118/93559852-a58e7a00-f9bb-11ea-92b0-44319d673c27.png" width="70%">

**5-1-2. 캔버스에 그려진 ConfigMap 객체의 프로퍼티를 정의합니다.**
<img src="https://user-images.githubusercontent.com/48265118/93564019-f904c600-f9c3-11ea-815a-a51ecbeeaf67.png" width="70%">

 > - ConfigMap 객체를 더블클릭하여 프로퍼티 편집창을 호출합니다.
 > - 각 프로퍼티값은 다음과 같이 입력합니다.
   >> Name: config-delivery<br/>
   >> Data: <br/>
   >>> name: Logistics_API<br/>
   >>> value: http://211.34.11.22:8080<br/>

<br/>

**5-1-3. Delivery Deployment 객체와 ConfigMap 객체를 연결합니다.**
<img src="https://user-images.githubusercontent.com/48265118/93564024-face8980-f9c3-11ea-96f3-1d2b4283a3cc.png" width="70%">

 > - delivery Deployment 객체를 클릭하여 ↗ 화살표 버튼을 클릭합니다.
 > - 연결 점선이 나타나면 config-delivery 객체를 클릭합니다.
 > - 연결선이 생기면 Deployment 객체를 더블클릭하여 envFrom.configMapRef 설정이 있는지 확인합니다.

<h4>5-2. Yaml 확인 및 클라우드 배포</h4>

**5-2-1. Code Preview에 들어가 객체의 Yaml을 확인합니다.**
<p>
<img src="https://user-images.githubusercontent.com/48265118/93413383-21b09100-f8da-11ea-8351-3e814f6e4d2b.png" width="30%">
<img src="https://user-images.githubusercontent.com/48265118/93564030-fc984d00-f9c3-11ea-8ccb-c1d429682370.png" width="50%">
</p>

 > - Yaml과 프로퍼티 편집창에서 설정한 값이 맞는지 확인합니다.

**5-2-2. 메뉴 영역에서 Deploy 버튼을 클릭하여 객체를 배포합니다.**
<p>
<img src="https://user-images.githubusercontent.com/48265118/93413385-22492780-f8da-11ea-8c44-34605e630f44.png" width="40%">
<img src="https://user-images.githubusercontent.com/48265118/93413386-22e1be00-f8da-11ea-9a3a-09d9ccd469fb.png" width="30%">
</p>

 > - 배포 전 클러스터 정보를 확인합니다.
<br/>

<h4>5-3. kubectl CLI</h4>

**5-3-1. Shell 영역에서 kubectl get cm 명령어로 배포를 확인합니다.**
<img src="https://user-images.githubusercontent.com/48265118/93564385-8e07bf00-f9c4-11ea-9de3-622b9fc03368.png" width="70%">

 > - kubectl get cm -n default 명령어 입력 후 ConfigMap 객체가 정상적으로 배포되었는지 확인합니다.
 > - kubectl exec -ti [Pod Object] -- /bin/sh 로 접속 후, env 명령어로 ConfigMap객체에 정의된 변수가 컨테이너로 전달됨을 확인

<br/><br/>


### ·	Istio Gateway, VirtualService

<h4>Test Case #6. 보다 효율적인 서비스 관리를 위해, 서비스 메시 도구인 이스티오(Istio)를 도입하고 Istio가 제공하는 Gateway를 통한 서비스로 전환합니다.</h4>
<hr/><br/>

<h4>6-1. Istio 설치</h4>

**6-1-1. shell 영역에서 명령어를 통해 Istio 패키지를 다운로드하고 설치합니다.**
<img src="" width="80%">

 > - 다음 명령어를 실행합니다.
 > - curl -L https://istio.io/downloadIstio | ISTIO_VERSION=1.7.1 TARGET_ARCH=x86_64 sh -
 > - cd istio-1.7.1
 > - export PATH=$PWD/bin:$PATH
 > - istioctl install --set profile=demo

**6-1-2. 설치가 정상적으로 되었는지 명령어(kubectl get pod -n istio-system)를 통해 확인합니다.**
<img src="https://user-images.githubusercontent.com/48265118/93735845-53e32b00-fc19-11ea-9338-324d99f04063.png" width="70%">

 > - 다음 명령어를 입력하고 출력된 값을 확인합니다.
 > - kubectl get pod -n istio-system

**6-1-3. Istio의 sidecar injection 활성화**
<img src="https://user-images.githubusercontent.com/48265118/93738232-382f5300-fc20-11ea-856f-08e676aa1543.png" width="70%">

 > - 다음 명령어를 입력하여 default namespace에 istio-injection=enabled 라벨을 추가합니다.
 > - kubectl label namespace default istio-injection=enabled
 > - kubectl get ns --show-labels 명령어를 입력하여 라벨이 적용되었는지 확인합니다.

<br/>

<h4>6-2. Istio Gateway, VirtualSevice 생성</h4>

**6-2-1. 오브젝트 팔레트에서 Istio의 Gateway, VirtualSevice 객체를 선택합니다.**
<img src="https://user-images.githubusercontent.com/48265118/93747041-14283d80-fc31-11ea-8901-784625e7b758.png" width="70%">

**6-2-2. 캔버스에 그려진 Gateway, VirtualSevice 객체의 프로퍼티를 정의합니다.**
<img src="https://user-images.githubusercontent.com/48265118/96972244-36bfb600-1551-11eb-97b9-7697858b5cd1.png" width="70%">
<img src="https://user-images.githubusercontent.com/48265118/96972248-37f0e300-1551-11eb-8875-a78009a85193.png" width="70%">

 > - Gateway, VirtualSevice 객체를 더블클릭하여 프로퍼티 편집창을 호출합니다.
 > - 각 프로퍼티값은 다음과 같이 입력합니다.
   >> Name: istio-gateway<br/>
   >> Server Port: 80<br/>
   >> Server Name: http<br/>
   >> Protocol: HTTP<br/>
   >> Server Hosts: *<br/><hr/>
   >> Name: vs-order<br/><hr/>
   >> Name: vs-product<br/><hr/>
   >> Name: vs-delivery<br/>

**6-2-3. Gateway와 VirtualService 객체를 연결합니다.**
<img src="https://user-images.githubusercontent.com/48265118/96973723-3de7c380-1553-11eb-8ba6-60d6f577f939.png" width="70%">

 > - Gateway 객체를 클릭하여 ↗ 화살표 버튼을 클릭합니다.
 > - 연결 점선이 나타나면 VirtualService 객체를 클릭합니다.
 > - 연결선이 생기면 VirtualService 객체를 더블클릭하여 gateways 설정값에 Istio Gateway 객체에서 설정한 이름이 있는지 확인합니다.

<br/>

<h4>6-3. Ingress 삭제 및 VirtualService와 Service 연결</h4>

**6-3-1. Ingress 객체를 삭제합니다.**
<p>
<img src="https://user-images.githubusercontent.com/48265118/93858956-ee19a080-fcf7-11ea-930d-69287838cc0d.png" width="35%">
<img src="https://user-images.githubusercontent.com/48265118/93859555-bceda000-fcf8-11ea-9783-638845fd31c6.png" width="45%">
</p>
<img src="https://user-images.githubusercontent.com/48265118/93859857-279edb80-fcf9-11ea-84ed-eb8d13d10a87.png" width="40%">

 > - Ingress 객체의 컨텍스트 메뉴에서 Delete Ingress를 클릭합니다.
 > - shell 영역에 kubectl delete ingress 명령어가 정상적으로 실행되었는지 확인합니다.
 > - Ingress 객체의 휴지통 버튼을 클릭하여 캔버스에서 객체를 삭제합니다.

**6-3-2. VirtualService와 Service 객체를 연결합니다.**
<img src="https://user-images.githubusercontent.com/48265118/96975729-d8490680-1555-11eb-9313-e5ee82c79d72.png" width="70%">

 > - VirtualService객체를 클릭하여 ↗ 화살표 버튼을 클릭합니다.
 > - 연결 점선이 나타나면 Service객체를 클릭합니다.
 > - 연결선이 생기면 VirtualService 객체를 더블클릭하여 http 설정에 match, route, retries 설정값이 주입되었는지 확인합니다.

<br/>

<h4>6-4. Yaml 확인 및 클라우드 배포</h4>

**6-4-1. Code Preview에 들어가 객체의 Yaml을 확인합니다.**
<img src="https://user-images.githubusercontent.com/48265118/93413383-21b09100-f8da-11ea-8351-3e814f6e4d2b.png" width="50%">
<p>
<img src="https://user-images.githubusercontent.com/48265118/97126040-225e0200-1779-11eb-8cf5-d1ad803901e4.png" width="40%">
<img src="https://user-images.githubusercontent.com/48265118/97126041-238f2f00-1779-11eb-8b39-9c3fe2188069.png" width="40%">
</p>

 > - Yaml과 프로퍼티 편집창에서 설정한 값이 맞는지 확인합니다.

**6-4-2. 메뉴 영역에서 Deploy 버튼을 클릭하여 객체를 배포합니다.**
<p>
<img src="https://user-images.githubusercontent.com/48265118/93413385-22492780-f8da-11ea-8c44-34605e630f44.png" width="40%">
<img src="https://user-images.githubusercontent.com/48265118/93413386-22e1be00-f8da-11ea-9a3a-09d9ccd469fb.png" width="30%">
</p>

 > - 배포 전 클러스터 정보를 확인하고 Deploy를 클릭합니다.
<br/>

<h4>6-5. kubectl CLI</h4>

**6-5-1. Shell 영역에서 kubectl get 명령어로 배포를 확인합니다.**
<img src="" width="70%">

 > - kubectl get gateway -n default 명령어 입력 후 Gateway 객체가 정상적으로 배포되었는지 확인합니다.
 > - kubectl get virtualservice -n default 명령어 입력 후 VirtualService 객체가 정상적으로 배포되었는지 확인합니다.

<br/><br/>



### ·	Istio DestinationRule

<h4>Test Case #7. 상품 서비스에 장애 발생시, 장애전파를 사전 차단하기 위해, Istio의 Circuit Breaker를 적용하여 서비스의 Resilency를 높이는 전략을 적용합니다.</h4>
<hr/><br/>

<h4>7-1. Istio DestinationRule 생성</h4>

**7-1-1. 오브젝트 팔레트에서 Istio의 DestinationRule 객체를 선택합니다.**
<img src="https://user-images.githubusercontent.com/48265118/93853689-45ffd980-fcef-11ea-8e96-9312e3a5ef91.png" width="70%">

**7-1-2. 캔버스에 그려진 DestinationRule 객체의 프로퍼티를 정의합니다.**
<img src="https://user-images.githubusercontent.com/48265118/97149842-a4b5e880-17b0-11eb-94ab-e9659801bc18.png" width="70%">

 > - DestinationRule 객체를 더블클릭하여 프로퍼티 편집창을 호출합니다.
 > - 각 프로퍼티값은 다음과 같이 입력합니다.
   >> Name: dr-product<br/>
   >> Version: version1<br/>

<br/>

<h4>7-2. DestinationRule와 Service 연결</h4>

**7-2-1. DestinationRule과 Service 객체를 연결합니다.**
<img src="https://user-images.githubusercontent.com/48265118/97149855-a8e20600-17b0-11eb-9f42-6806c60fc904.png" width="70%">

 > - dr-product 객체를 클릭하여 ↗ 화살표 버튼을 클릭합니다.
 > - 연결 점선이 나타나면 product-svc 객체를 클릭합니다.
 > - 연결선이 생기면 dr-product 객체를 더블클릭하여 spec.host에 Service 객체의 Name: product-svc 가 주입되었는지 확인합니다.

<br/>

<h4>7-3. Yaml 확인 및 클라우드 배포</h4>

**7-3-1. Code Preview에 들어가 객체의 Yaml을 확인합니다.**
<p>
<img src="https://user-images.githubusercontent.com/48265118/93413383-21b09100-f8da-11ea-8351-3e814f6e4d2b.png" width="30%">
<img src="https://user-images.githubusercontent.com/48265118/97154383-26a91000-17b7-11eb-9f41-7535075bd7c4.png" width="50%">
</p>

 > - Yaml과 프로퍼티 편집창에서 설정한 값이 맞는지 확인합니다.

**7-3-2. 메뉴 영역에서 Deploy 버튼을 클릭하여 객체를 배포합니다.**
<p>
<img src="https://user-images.githubusercontent.com/48265118/93413385-22492780-f8da-11ea-8c44-34605e630f44.png" width="40%">
<img src="https://user-images.githubusercontent.com/48265118/93413386-22e1be00-f8da-11ea-9a3a-09d9ccd469fb.png" width="30%">
</p>

 > - 배포 전 클러스터 정보를 확인하고 Deploy를 클릭합니다.
<br/>

<h4>7-4. kubectl CLI</h4>

**7-4-1. Shell 영역에서 kubectl get 명령어로 배포를 확인합니다.**
<img src="" width="70%">

 > - kubectl get destinationrule -n default 명령어 입력 후 DestinationRule 객체가 정상적으로 배포되었는지 확인합니다.

<br/><br/>



### ·	Helm Chart

<h4>Test Case #8. 완료된 디플로이 다이어그래밍을 Helm 차트로 생성하고, 이를 통해 GCP에 배포합니다.</h4>
<hr/><br/>

<h4>8-1. Helm Chart 생성 확인</h4>

**8-1-1. Code Preview에 들어가 Template에 Helm을 선택합니다.**
<p>
<img src="https://user-images.githubusercontent.com/48265118/93413383-21b09100-f8da-11ea-8351-3e814f6e4d2b.png" width="30%">
<img src="https://user-images.githubusercontent.com/48265118/94121073-dd9a2f00-fe8b-11ea-8c41-6402358303b9.png" width="40%">
</p>

**8-1-2. Helm Chart 구조로 오브젝트의 Yaml 파일이 정상적으로 생성되었는지 확인합니다.**
<img src="https://user-images.githubusercontent.com/48265118/94244918-844a0280-ff54-11ea-9e97-9359ede2d8d7.png" widht="70%">

 > - local 폴더 아래 Chart.yaml, templates 폴더, values.yaml이 있는지 확인합니다.
 > - templates 폴더에 NOTES.txt 파일과 오브젝트 kind별 Yaml 파일이 생성되었는지 확인합니다.

<br/>

<h4>8-3. Helm Chart 다운로드</h4>

**8-3-1. Code의 Download Archive를 클릭하여 Yaml을 로컬에 다운로드 합니다.**
<img src="https://user-images.githubusercontent.com/48265118/94244568-0980e780-ff54-11ea-820c-e3467b25e1bc.png">

 > - 다운로드할 Template이 Helm인지 확인하고 Download 버튼을 클릭합니다.
 > - 다운로드된 압축 파일을 풀고 Code Preview에서 확인한 구조와 파일이 일치하는지 확인합니다.

<br/><br/>

## Reference Video

<h3>Kuber-Ez 도구를 활용한 쿠버네티스 객체 다이어그래밍 예제 참고 영상</h3>

<h4>1) K8s Deploy-Diagramming Video #1 - Kubernetes Objects</h4>

[<img src="https://user-images.githubusercontent.com/35618409/92857276-672f1300-f42f-11ea-994e-2027c0d17e74.png" width="80%">](https://youtu.be/5iDQWynpV0c)
<br/><br/><br/>

<h4>2) K8s Deploy-Diagramming Video #2 - Istio Objects</h4>

[<img src="https://user-images.githubusercontent.com/35618409/92857324-76ae5c00-f42f-11ea-9dc2-99c59b7da83c.png" width="80%">](https://youtu.be/nEY0B7D0irQ)


## Embedding Customizing KuberEz


<h3> To embed kuberEz in your product, just import the vue component from npm and use the tag:</h3>

```javascript
<template>
    <div id="app">
        <kube-designer style="width: 50%" />
    </div>
</template>

<script>

import KuberEz from 'kuber-ez/src/main'
Vue.use(KuberEz)

export default {
    name: 'App'
}
</script>

```

<h3>How to add new component</h3>

You can find examples of Kubernetes object models in
https://github.com/uengine-oss/kuber-ez/blob/master/src/components/designer/k8s-modeling/element.
Create a new copy of element and property panel component for the K8S object kind (e.g. Deployment.vue and DeploymentPropertyPanel.vue), and place them in the above folder.
Then add the component to the 'elementTypes' array of
https://github.com/uengine-oss/kuber-ez/blob/master/src/components/designer/k8s-modeling/KubeModeler.vue file.


